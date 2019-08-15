export default {
  bind: (func, ctx = {}, ...ra) => {
    ctx.f = func;
    return (...args) => {
      ctx.f(...ra, ...args)
      delete ctx.f;
    }
  },
  call: (func, ctx = {}, ...ra) => {

  },
  apply: (func, ctx = {}, ...ra) => {

  }
}


/**
 * Rendering HTML
 * Render function can be reused to render similar HTML tags.
 * 
  renderHtmlTag = tagName => content => `<${tagName}>${content}</${tagName}>`

  renderDiv = renderHtmlTag('div')
  renderH1 = renderHtmlTag('h1')

  console.log(
    renderDiv('this is a really cool div'),
    renderH1('and this is an even cooler h1')
  )
 */