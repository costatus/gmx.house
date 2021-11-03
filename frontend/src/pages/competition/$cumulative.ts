import { Behavior, combineArray, O, Op } from '@aelea/core'
import { $element, $node, $text, attr, attrBehavior, component, INode, style } from "@aelea/dom"
import { Route } from '@aelea/router'
import { $card, $column, $row, layoutSheet, screenUtils, state } from '@aelea/ui-components'
import { colorAlpha, pallete } from '@aelea/ui-components-theme'
import { BaseProvider } from '@ethersproject/providers'
import { constant, map, periodic, scan, switchLatest } from '@most/core'
import { Stream } from '@most/types'
import { calculateSettledPositionDelta, formatFixed, IAggregatedPositionSettledSummary, IAggregatedTradeSummary, IClaim, IPagableResponse, IPageable } from 'gambit-middleware'
import { $Table2 } from "../../common/$Table2"
import { $AccountPreview } from '../../components/$AccountProfile'
import { $ProfitLossText } from "../common"



export interface ICompetitonTopCumulative<T extends BaseProvider> {
  parentRoute: Route
  provider?: Stream<T>
  claimMap: Stream<Map<string, IClaim>>

  competitionNov2021HighestCumulative: Stream<IPagableResponse<IAggregatedPositionSettledSummary>>
  competitionNov2021LowestCumulative: Stream<IPagableResponse<IAggregatedPositionSettledSummary>>

  parentStore: <T, TK extends string = string>(key: TK, intitialState: T) => state.BrowserStore<T, TK>;
}


export const $settledPercentage = (pos: IAggregatedPositionSettledSummary) => {
  const delta = calculateSettledPositionDelta(pos.trade)

  const perc = formatFixed(delta.deltaPercentage, 2)
  const isNeg = delta.deltaPercentage < 0n

  return $row(
    $text(style({ color: isNeg ? pallete.negative : pallete.positive }))(
      `${isNeg ? '' : '+'}${perc}%`
    )
  )
}

const $nftPrice = (rank: number, imgOp: Op<INode, INode>) => {
  const size = '54px'
  const block = style({ width: size, height: size, position: 'absolute', offset: 0 })
  const $img = $element('img')(block)
  
  return $row(style({ position: 'relative', width: size }))(
    $img(imgOp)(),
    $row(style({ alignItems: 'baseline', width: size, zIndex: 5, textAlign: 'center', placeContent: 'center' }))(
      $text(style({ fontSize: '1em', textShadow: `rgb(0 0 0 / 61%) 1px 1px 0px` }))(`#`),
      $text(style({ fontSize: '1.5em', lineHeight: size, textShadow: `rgb(0 0 0 / 61%) 1px 1px 0px` }))(`${rank}`),
    )
  )
}

const counter = scan((seed, n: number) => seed + n, 0, constant(1, periodic(2000)))

const blueberriesPreviewList = ['/assets/blueberriesNFT/Green.png', '/assets/blueberriesNFT/Orange.png', '/assets/blueberriesNFT/Purple.png', '/assets/blueberriesNFT/Yellow.png']

export const $CompetitionCumulative = <T extends BaseProvider>(config: ICompetitonTopCumulative<T>) => component((
  [routeChange, routeChangeTether]: Behavior<string, string>,
  [highTableRequestIndex, highTableRequestIndexTether]: Behavior<number, number>,
  [lowTableRequestIndex, lowTableRequestIndexTether]: Behavior<number, number>,
) => {



  const pagerOp = map((pageIndex: number): IPageable => {

    return {
      offset: pageIndex * 20,
      pageSize: 20,
    }
  })



  return [

    $column(
      
      $column(layoutSheet.spacing, style({ alignItems: 'center', placeContent: 'center', marginBottom: '60px', }))(
        $text(style({ fontSize: '.85em' }))('Highest or Lowest Cumulative Percentage PnL'),
        $row(layoutSheet.spacingSmall, style({ alignItems: 'baseline' }))(
          $text(style({ fontSize: '2.5em', fontWeight: 'bold', color: pallete.negative, textShadow: `1px 1px 50px ${pallete.negative}, 1px 1px 50px rgb(250 67 51 / 59%) ` }))('RED'),
          $text(style({}))('vs.'),
          $text(style({ fontSize: '2.5em', fontWeight: 'bold', color:pallete.positive, textShadow: `1px 1px 50px ${pallete.positive}` }))('GREEN'),
        ),
        
        $text(style({ fontSize: '.85em' }))('+$1000 Trades of Nov 3-16'),
      ),

      $node(style({ gap: '46px', display: 'flex', flexDirection: screenUtils.isMobileScreen ? 'column' : 'row' }))(


        
        $column(layoutSheet.spacing, style({ flex: 1, padding: '0 12px' }))(
          $card(layoutSheet.spacingBig, style({ background: `radial-gradient(101% 83% at 100% 100px, ${colorAlpha(pallete.positive, .04)} 0px, ${pallete.background} 100%)`, padding: screenUtils.isMobileScreen ? '16px 8px' : '20px', margin: '0 -12px' }))(
            $Table2<IAggregatedPositionSettledSummary & {claimMap: Map<string, IClaim>, index: number}>({
              bodyContainerOp: layoutSheet.spacing,
              scrollConfig: {
                containerOps: O(layoutSheet.spacingBig)
              },
              dataSource: combineArray((claimMap, res) => {
                return {
                  data: res.page.map((item, index) => {
                    return { ...item, claimMap, index: index + res.offset }
                  }),
                  pageSize: res.pageSize,
                  offset: res.offset,
                }
              }, config.claimMap, config.competitionNov2021HighestCumulative),
              columns: [
                {
                  $head: $text('Rank'),
                  columnOp: style({ flex: .7, alignItems: 'center', placeContent: 'center' }),
                  $body: map((pos) => {
                    const rank = pos.index + 1

                    let $nftPLaceholder = $row(style({ alignItems: 'baseline', zIndex: 5, textAlign: 'center', placeContent: 'center' }))(
                      $text(style({ fontSize: '1em' }))(`#`),
                      $text(style({ fontSize: '1.5em' }))(`${rank}`),
                    )

                    if (rank < 6) {
                      $nftPLaceholder = rank > 1
                        ? $nftPrice(rank, attrBehavior(map(n => ({ src: blueberriesPreviewList[(n % blueberriesPreviewList.length)] }), counter)))
                        : $nftPrice(rank, attr({ src: '/assets/blueberriesNFT/Winner.png' })) 
                    }

                    if (rank < 21) {

                      return $column(layoutSheet.spacingSmall)(
                        $row(style({ alignItems: 'center' }), layoutSheet.spacingSmall)(
                          $nftPLaceholder
                        ),
                        
                        // $text(style({ fontSize: '1em', fontWeight: 'bold' }))(
                        //   `$${readableNumber(getPrizePoolByRank(rank))}`
                        // )
                      )
                    }

                    return $row()
                  })
                },
                {
                  $head: $text('Account'),
                  columnOp: style({ minWidth: '120px', flex: 1.2 }),
                  $body: map(({ account }: IAggregatedTradeSummary) => {

                    return switchLatest(map(map => {
                      return $AccountPreview({ address: account, parentRoute: config.parentRoute, claim: map.get(account.toLowerCase()) })({
                        profileClick: routeChangeTether()
                      })
                    }, config.claimMap))
                  })
                },
                {
                  $head: $text('Profit-%'),
                  columnOp: style({ flex:1, placeContent: 'flex-end', maxWidth: '110px' }),
                  $body: map((pos) => {
                    return $row(
                      $ProfitLossText(pos.pnl)
                    )
                  })
                }
              ],
            })({ scrollIndex: highTableRequestIndexTether() }),
          ),
        ),
        $column(layoutSheet.spacing, style({ flex: 1, padding: '0 12px' }))(
          $card(layoutSheet.spacingBig, style({ background: `radial-gradient(101% 83% at 0% 100px, ${colorAlpha(pallete.negative, .1)} 0px, ${pallete.background} 100%)`, padding: screenUtils.isMobileScreen ? '16px 8px' : '20px', margin: '0 -12px' }))(
            $Table2<IAggregatedPositionSettledSummary & {claimMap: Map<string, IClaim>, index: number}>({
              bodyContainerOp: layoutSheet.spacing,
              scrollConfig: {
                containerOps: O(layoutSheet.spacingBig)
              },
              dataSource: combineArray((claimMap, res) => {
                return {
                  data: res.page.map((item, index) => {
                    return { ...item, claimMap, index: index + res.offset }
                  }),
                  pageSize: res.pageSize,
                  offset: res.offset,
                }
              }, config.claimMap, config.competitionNov2021LowestCumulative),
              columns: [
                {
                  $head: $text('Rank'),
                  columnOp: style({ flex: .7, alignItems: 'center', placeContent: 'center' }),
                  $body: map((pos) => {
                    const rank = pos.index + 1

                    let $nftPLaceholder = $row(style({ alignItems: 'baseline', zIndex: 5, textAlign: 'center', placeContent: 'center' }))(
                      $text(style({ fontSize: '1em' }))(`#`),
                      $text(style({ fontSize: '1.5em' }))(`${rank}`),
                    )

                    if (rank < 6) {
                      $nftPLaceholder = rank > 1
                        ? $nftPrice(rank, attrBehavior(map(n => ({ src: blueberriesPreviewList[(n % blueberriesPreviewList.length)] }), counter)))
                        : $nftPrice(rank, attr({ src: '/assets/blueberriesNFT/Looser.png' })) 
                    }

                    if (rank < 21) {

                      return $column(layoutSheet.spacingSmall)(
                        $row(style({ alignItems: 'center' }), layoutSheet.spacingSmall)(
                          $nftPLaceholder
                        ),
                        
                        // $text(style({ fontSize: '1em', fontWeight: 'bold' }))(
                        //   `$${readableNumber(getPrizePoolByRank(rank))}`
                        // )
                      )
                    }

                    return $row()
                  })
                },
                {
                  $head: $text('Account'),
                  columnOp: style({ minWidth: '120px', flex: 1.2 }),
                  $body: map(({ account }: IAggregatedTradeSummary) => {

                    return switchLatest(map(map => {
                      return $AccountPreview({ address: account, parentRoute: config.parentRoute, claim: map.get(account.toLowerCase()) })({
                        profileClick: routeChangeTether()
                      })
                    }, config.claimMap))
                  })
                },
                {
                  $head: $text('Profit-%'),
                  columnOp: style({ flex:1, placeContent: 'flex-end', maxWidth: '110px' }),
                  $body: map((pos) => {
                    return $row(
                      $ProfitLossText(pos.pnl - pos.fee)
                    )
                  })
                }
              ],
            })({ scrollIndex: lowTableRequestIndexTether() }),
          ),
        ),
      ),
    ),


    {
      competitionNov2021LowestCumulative: pagerOp(highTableRequestIndex),
      competitionNov2021HighestCumulative: pagerOp(lowTableRequestIndex),
      routeChange
    }
  ]
})

