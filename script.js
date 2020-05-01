const square = document.querySelector('.square')

// 1. Inline styles by style attribute
// this is inconvenient :)

// square.setAttribute('style', 'background-color: red; width: 100px; height: 100px;')


// 2. Setting class by class attribute
// this is ok but very inconvenient, and we need CSS class defined first

// const currentClassName = square.getAttribute('class')
// square.setAttribute('class', currentClassName + ' ' + 'red-square')


// 3. Setting class by className property of HTMLElement object
// this is ok but inconvenient, and we need CSS class defined first

// const currentClassName = square.className
// square.className = currentClassName + ' ' + 'red-square'


// this is ok but not working in IE, and we need CSS class defined first

// square.classList.add('red-square')


// 5. Adding style tag to document head in JS
// this is super flexible - all code in JS but we still can easy
// overwrite CSS classes with other CSS
// but is also tricky to do

// const styles = `
//     .red-square {
//         width: 100px;
//         height: 100px;
//         background-color: red;
//     }
// `
// const style = document.createElement('style')
// style.innerHTML = styles
// style.id = 'js-style-element-1'
// document.head.appendChild(style)

// square.classList.add('red-square')

// 6. Modifying .styles property of HTMLElement object
// easiest and suggested as we are learning

square.style.height = '100px'
square.style.width = '100px'
square.style.backgroundColor = 'red'