import { $svg, attr } from "@aelea/core"
import { pallete } from "@aelea/ui-components-theme"


export const $path = $svg('path')

export const $trash = $path(
  attr({
    d: 'M6.24 18.84A2.16 2.16 0 008.4 21h7.2a2.16 2.16 0 002.16-2.16L19.2 7.32H4.8l1.44 11.52zm7.92-9.36h1.44v9.36h-1.44V9.48zm-2.88 0h1.44v9.36h-1.44V9.48zm-2.88 0h1.44v9.36H8.4V9.48zm10.44-5.04h-4.68S13.838 3 13.44 3h-2.88c-.398 0-.72 1.44-.72 1.44H5.16a1.08 1.08 0 00-1.08 1.08V6.6h15.84V5.52a1.08 1.08 0 00-1.08-1.08z'
  })
)()

export const $logo = $svg('g')(
  $path(
    attr({
      d: 'M30.2 25.88h2.068c.404 0 .732.311.732.696 0 .385-.328.697-.732.697H1.732c-.404 0-.732-.312-.732-.697 0-.385.328-.697.732-.697h2.152c.865-1.25 1.778-2.109 2.642-2.921 1.594-1.5 3.02-2.84 3.66-6.189.639-3.348 2.064-4.689 3.658-6.189.864-.812 1.777-1.671 2.642-2.922L14.452 4.72a.451.451 0 01.14-.643.503.503 0 01.675.132l1.869 2.7 1.869-2.7a.503.503 0 01.676-.132c.225.14.287.429.139.643l-2.034 2.938s5.032 2.16 6.207 9.111c1.175 6.95 6.207 9.11 6.207 9.11zM26.783 4c-.223 0-.445.026-.66.077a.178.178 0 00-.138.141.171.171 0 00.083.175c.696.418 1.112 1.135 1.112 1.917 0 1.044-.743 1.948-1.806 2.198a.177.177 0 00-.136.142.171.171 0 00.083.175c.437.262.943.401 1.462.401 1.513 0 2.744-1.172 2.744-2.613 0-1.44-1.23-2.613-2.744-2.613zM7.35 10.471l-.565-.059-.357-.42a.125.125 0 00-.206.026l-.233.493-.53.193a.118.118 0 00-.076.087c-.008.04.006.08.038.108l.42.363.03.54c.002.04.026.077.063.096a.127.127 0 00.12-.002l.492-.268.548.14c.041.01.085 0 .116-.028a.112.112 0 00.035-.108l-.115-.529.309-.453a.111.111 0 00.008-.113.123.123 0 00-.097-.066zm3.21-3.408c.041.004.078.029.096.065a.111.111 0 01-.008.113l-.309.454.116.529a.113.113 0 01-.036.108.126.126 0 01-.115.028l-.548-.14-.493.268a.126.126 0 01-.119.001.116.116 0 01-.063-.096l-.03-.54-.42-.363a.113.113 0 01-.038-.107.118.118 0 01.076-.087l.53-.194.233-.493a.126.126 0 01.206-.026l.357.42.565.06zm-6.42 0l-.564-.06-.358-.419a.125.125 0 00-.206.025l-.233.493-.53.194a.118.118 0 00-.076.087c-.008.04.007.08.038.107l.42.364.03.54c.002.04.026.076.063.095a.125.125 0 00.12-.001l.492-.268.548.14c.041.01.085 0 .116-.028a.112.112 0 00.035-.108l-.115-.53.309-.453a.111.111 0 00.008-.113.122.122 0 00-.097-.065zm13.397 9.005c-2.295-.005-3.477-.013-3.591-.03l-.165-.023-.085-.012a.249.249 0 00-.145.02c-.055.028-.067.05-.067.114 0 .073-.035.247-.09.434a4.675 4.675 0 01-.302.729c-.06.112-.1.209-.09.217a.927.927 0 00.3.073.587.587 0 00.11-.142c.17-.268.507-.511.786-.565l.032-.006.146-.029c.183-.036 1.147-.081 1.768-.083.544 0 .623.004.623.032 0 .02-.02.038-.04.047a4.086 4.086 0 00-.588.271c-.305.185-.654.54-.78.79-.32.625-.238 1.304.209 1.758.128.13.404.33.54.392.078.034.08.06.012.084l-.047.016c-.06.022-.164.06-.27.095-.5.177-1.013.437-1.237.624a.354.354 0 01-.085.062c-.01 0-.093.084-.188.187-.274.295-.38.546-.38.88 0 .666.46 1.264 1.246 1.617.376.17.747.27 1.287.353.252.036 1.172.036 1.427 0 .842-.125 1.491-.392 1.94-.798.267-.241.415-.456.524-.766a1.341 1.341 0 000-.774c-.155-.432-.438-.744-.959-1.06-.283-.17-.38-.22-1.03-.52-.261-.12-.715-.331-1.01-.47a11.69 11.69 0 01-.63-.305c-.265-.163-.47-.384-.564-.61-.06-.136-.072-.594-.022-.734.081-.227.412-.604.412-.604s.773-.451 1.191-.5c.407-.052 2.624-.012 2.96.053h.003c.023.005.04.008.055.004.038-.01.06-.074.135-.308l.004-.01c.04-.125.083-.247.097-.275.026-.06.029-.155.003-.194-.017-.021-.719-.028-3.445-.034zm-2.39 5.384c.171-.434.566-.808 1.108-1.053.131-.06.257-.108.283-.108.026 0 .181.06.345.131.961.424 1.563.7 1.684.77.295.172.555.443.66.688.052.123.108.411.108.566 0 .11-.035.277-.085.393-.083.198-.371.45-.664.579-.216.097-.309.125-.706.204-.264.054-.997.022-1.351-.06-.628-.144-1.116-.518-1.332-1.024-.086-.198-.105-.31-.105-.623-.002-.286.005-.338.055-.463z',
      // d: 'M17.103 15.084c-2.583-.005-3.912-.017-4.04-.037l-.186-.029-.096-.014a.256.256 0 00-.164.024c-.06.034-.074.061-.074.143 0 .09-.04.308-.101.543-.09.312-.204.617-.34.911a.877.877 0 00-.102.272.96.96 0 00.337.09.725.725 0 00.126-.176c.19-.337.57-.642.884-.708l.036-.009.164-.034c.206-.045 1.29-.101 1.988-.105.614 0 .702.005.702.04 0 .025-.023.049-.046.059-.139.049-.523.245-.661.34-.344.231-.736.673-.879.986-.358.783-.267 1.631.236 2.198.146.161.455.411.609.49.088.042.09.074.013.105l-.054.02-.303.12c-.561.22-1.14.544-1.391.778a.398.398 0 01-.097.078c-.011 0-.104.106-.212.235-.306.368-.426.682-.426 1.099 0 .833.517 1.582 1.401 2.022.422.211.841.338 1.448.44.284.047 1.32.047 1.606 0 .947-.156 1.677-.49 2.183-.998.274-.259.477-.588.59-.956a1.856 1.856 0 000-.969c-.174-.54-.492-.929-1.08-1.323-.317-.213-.427-.276-1.158-.652-.38-.193-.76-.389-1.137-.586-.24-.119-.477-.246-.71-.381a1.708 1.708 0 01-.634-.764c-.066-.17-.08-.741-.025-.917.092-.284.265-.566.463-.755.323-.31.871-.564 1.342-.626.459-.064 2.951-.013 3.33.068h.003c.026.005.045.01.062.005.044-.013.065-.093.152-.386l.005-.011a4.11 4.11 0 01.11-.346c.029-.075.032-.192.001-.241-.018-.027-.808-.034-3.875-.043zm-1.442 5.414c-.609.306-1.054.774-1.247 1.316-.056.157-.064.221-.062.578 0 .393.021.533.117.78.244.632.793 1.1 1.5 1.28.399.102 1.222.143 1.52.075.447-.099.55-.135.795-.255.33-.162.653-.476.745-.723.057-.146.098-.356.098-.492 0-.194-.065-.554-.124-.707-.118-.306-.41-.645-.74-.86-.137-.09-.815-.433-1.895-.963-.185-.089-.358-.165-.388-.165-.11.033-.218.078-.32.136z M1.721 27L15.5 7.63l-1.893-1.906a.449.449 0 01.142-.647.523.523 0 01.692.134L16.5 7l1.78-1.788a.522.522 0 01.83-.01.449.449 0 01.005.524L17.5 7.629 31 27V27H1.721zM25.584 5.079c.222-.05.45-.077.678-.077 1.553 0 2.817 1.178 2.816 2.627 0 1.45-1.263 2.628-2.816 2.628-.532 0-1.051-.14-1.5-.405a.17.17 0 01-.086-.175.18.18 0 01.14-.142c1.092-.253 1.853-1.16 1.853-2.21 0-.787-.426-1.508-1.142-1.927a.17.17 0 01-.035-.27.18.18 0 01.092-.05zm-19.847 6.37l.578.06a.123.123 0 01.06.018.126.126 0 01.041.046.11.11 0 01-.008.114l-.317.457.117.531a.111.111 0 01-.037.109c-.03.028-.075.038-.117.028l-.563-.14-.506.27a.133.133 0 01-.121 0 .118.118 0 01-.066-.097l-.031-.541-.431-.366a.112.112 0 01-.01-.163.12.12 0 01.05-.033l.543-.195.24-.495a.13.13 0 01.159-.059c.019.008.036.019.05.034l.37.421zM9.67 8.1a.126.126 0 00-.06-.02l-.578-.059-.368-.421a.13.13 0 00-.212.025l-.238.495-.544.195a.119.119 0 00-.077.087.112.112 0 00.038.109l.43.364.031.543a.117.117 0 00.065.097.131.131 0 00.123-.003l.506-.268.563.14a.131.131 0 00.118-.028.112.112 0 00.035-.108l-.118-.532.317-.456a.11.11 0 00.01-.114.125.125 0 00-.041-.046zm-7.228-.08l.58.06a.125.125 0 01.099.067.11.11 0 01-.007.113l-.319.456.12.532a.112.112 0 01-.04.108c-.03.029-.074.039-.116.029l-.562-.14-.506.268a.131.131 0 01-.168-.039.117.117 0 01-.02-.056l-.03-.543-.43-.364a.112.112 0 01-.041-.109.118.118 0 01.079-.087l.543-.195.24-.495a.129.129 0 01.21-.027l.368.423z'
    })
  )(),
  $path(
    attr({
      d: 'M45 70.299c21.1 7.7 46.4 29.4 68.2 58.6 3.3 4.5 6.3 8.1 6.7 8.1.3 0 2.6-2.9 5.1-6.3 6.8-9.4 24-28.6 31.7-35.4 14.6-12.9 26.2-19.9 39.8-24.3 5.7-1.9 10.1-2.3 24.3-2.8l17.2-.5v50.3h-13.3c-12.8 0-13.6.1-19.3 3-13.1 6.5-33.8 28.5-53.4 56.8l-4.3 6.3 5.3 7.7c21.9 31.7 44.8 54.4 58.5 57.9 2.7.7 9.8 1.3 15.7 1.3H238v49.2l-18.2-.5c-20.2-.5-26.4-1.9-38.6-8.8-16.1-9.2-37.1-28.6-53.2-49.4-4.7-6.1-8.8-11.2-9.2-11.5-.4-.3-3.2 2.8-6.2 6.9-21.3 28.5-46.7 50.2-67.6 57.8-6.9 2.5-8.9 2.7-26.2 3.1l-18.8.4v-49l14.3-.4c14.3-.3 14.3-.3 20.2-3.8 7.4-4.4 24.3-20.6 33.9-32.4 9.2-11.3 21.6-28.6 21.6-30.1 0-1.3-11.7-17.9-19.8-28-8.2-10.3-23.8-26.1-30.8-31.1-8.9-6.4-12.6-7.4-27-7.4H0v-49.2l18.8.4c17.3.4 19.3.6 26.2 3.1z',
      fill: pallete.primary
    })
  )(),
)

export const $check = $path(
  attr({
    d: 'M21 11.086v.92a8.966 8.966 0 01-2.64 6.362A8.965 8.965 0 0111.995 21a8.968 8.968 0 01-6.362-2.64A8.973 8.973 0 013 11.995a8.965 8.965 0 012.64-6.362A8.97 8.97 0 0112.005 3a8.844 8.844 0 013.649.775 1 1 0 10.83-1.819A10.849 10.849 0 0012.007 1a10.97 10.97 0 00-7.78 3.217A10.97 10.97 0 001 11.994a10.97 10.97 0 003.217 7.78A10.963 10.963 0 0011.993 23a10.974 10.974 0 007.78-3.217A10.969 10.969 0 0023 12.006v-.92a1 1 0 00-2 0zm.293-7.787L12 12.601l-2.293-2.292a.999.999 0 10-1.414 1.414l3 3c.39.391 1.024.39 1.415 0l10-10.01A1 1 0 1021.293 3.3v-.001z'
  })
)()

// fill-rule="evenodd" clip-rule="evenodd"
export const $alertIcon = $svg('g')(
  $path(
    attr({
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M1.99 14.391L9.61 22.01a3.382 3.382 0 004.782 0l7.618-7.617a3.382 3.382 0 000-4.783L14.392 1.99a3.382 3.382 0 00-4.783 0L1.99 9.609a3.382 3.382 0 000 4.782zm.91-.217l6.926 6.925c1.2 1.201 3.147 1.201 4.348 0l6.925-6.925c1.201-1.2 1.201-3.147 0-4.348l-6.925-6.925a3.075 3.075 0 00-4.348 0L2.901 9.826a3.075 3.075 0 000 4.348z'
    })
  )(),
  $path(
    attr({

      d: 'M11 16.8c0 .662.447 1.2 1 1.2.552 0 1-.538 1-1.2 0-.662-.448-1.2-1-1.2-.553 0-1 .538-1 1.2zM12 14c.552 0 1-.538 1-1.2V7.2c0-.663-.448-1.2-1-1.2-.553 0-1 .537-1 1.2v5.6c0 .662.447 1.2 1 1.2z'
    })
  )()
)

export const $caretDown = $path(attr({ d: 'M4.616.296c.71.32 1.326.844 2.038 1.163L13.48 4.52a6.105 6.105 0 005.005 0l6.825-3.061c.71-.32 1.328-.84 2.038-1.162l.125-.053A3.308 3.308 0 0128.715 0a3.19 3.19 0 012.296.976c.66.652.989 1.427.989 2.333 0 .906-.33 1.681-.986 2.333L18.498 18.344a3.467 3.467 0 01-1.14.765c-.444.188-.891.291-1.345.314a3.456 3.456 0 01-1.31-.177 2.263 2.263 0 01-1.038-.695L.95 5.64A3.22 3.22 0 010 3.309C0 2.403.317 1.628.95.98c.317-.324.68-.568 1.088-.732a3.308 3.308 0 011.24-.244 3.19 3.19 0 011.338.293z' }))()
export const $caretDblDown = $path(attr({ d: 'M15.97 28.996c-.497 0-.983-.176-1.37-.493L1.77 17.793a2.15 2.15 0 01-.275-3.021 2.142 2.142 0 013.017-.276l11.465 9.6 11.464-9.254a2.143 2.143 0 013.011.311l.006.012a2.14 2.14 0 01-.175 3.022l-.124.106-12.83 10.345c-.41.258-.884.387-1.358.358z M15.97 18.996c-.497 0-.983-.176-1.37-.493L1.77 7.793a2.15 2.15 0 01-.275-3.021 2.142 2.142 0 013.017-.276l11.465 9.6L27.44 4.842a2.143 2.143 0 013.011.311l.006.012a2.14 2.14 0 01-.175 3.022l-.124.106-12.83 10.345c-.41.258-.884.387-1.358.358z' }))()


export const $external = $path(
  attr({ d: 'M17.5 13.1v6.6c0 .304-.122.578-.322.778-.2.2-.474.322-.778.322H4.3c-.304 0-.577-.122-.778-.322-.2-.2-.322-.474-.322-.778V7.6c0-.304.122-.577.322-.778.2-.2.474-.322.778-.322h6.6a1.1 1.1 0 000-2.2H4.3c-.91 0-1.738.37-2.333.967A3.297 3.297 0 001 7.6v12.1c0 .91.37 1.738.967 2.333A3.297 3.297 0 004.3 23h12.1c.91 0 1.738-.37 2.333-.967A3.297 3.297 0 0019.7 19.7v-6.6a1.1 1.1 0 00-2.2 0zm-6.922 1.878L20.8 4.755V8.7a1.1 1.1 0 002.2 0V2.1a1.094 1.094 0 00-.321-.777l-.002-.002A1.095 1.095 0 0021.9 1h-6.6a1.1 1.1 0 000 2.2h3.945L9.022 13.422a1.099 1.099 0 101.556 1.556z' })
)()

export const $ethScan = $path(
  attr({ d: 'M5.572 11.475a.934.934 0 01.937-.933l1.553.005a.934.934 0 01.933.934v5.874c.175-.052.4-.107.646-.165a.778.778 0 00.6-.757V9.146a.935.935 0 01.933-.934h1.556a.934.934 0 01.934.934v6.763s.39-.158.769-.318a.78.78 0 00.475-.717V6.81a.935.935 0 01.934-.934h1.556a.934.934 0 01.934.934v6.64c1.349-.979 2.716-2.155 3.8-3.57a1.568 1.568 0 00.24-1.463A10.982 10.982 0 0012.138 1C6.039.919.998 5.899 1 12.001a10.968 10.968 0 001.46 5.502 1.39 1.39 0 001.326.688c.295-.026.661-.063 1.097-.114a.777.777 0 00.69-.772v-5.83zM5.538 20.896a10.991 10.991 0 0017.433-9.649c-4.017 5.994-11.434 8.795-17.433 9.649z' })
)()

export const $github = $path(
  attr({
    d: 'M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z'
  })
)()
export const $twitter = $path(
  attr({
    d: 'M23 5.129a8.85 8.85 0 01-2.59.714 4.565 4.565 0 001.984-2.514c-.872.52-1.838.9-2.865 1.103A4.498 4.498 0 0016.234 3c-2.492 0-4.511 2.034-4.511 4.543 0 .355.039.701.116 1.034-3.75-.19-7.076-1.999-9.301-4.75a4.57 4.57 0 00-.61 2.284c0 1.575.795 2.968 2.006 3.782a4.493 4.493 0 01-2.045-.567v.056a4.537 4.537 0 003.622 4.457 4.488 4.488 0 01-2.04.078c.575 1.804 2.242 3.12 4.214 3.159A9.01 9.01 0 011 18.958 12.699 12.699 0 007.92 21c8.3 0 12.842-6.927 12.842-12.933 0-.2-.005-.394-.013-.589A9.119 9.119 0 0023 5.128z'
  })
)()


