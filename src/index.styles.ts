import * as React from 'react'
import { PasStyleProps } from "."

const useEvents = (props:PasStyleProps, tag:string) => {

  const [hover, setHover] = React.useState<boolean>(false)
  const [focus, setFocus] = React.useState<boolean>(false)

  const {_hover, _focus} = props

  const layout = (css : PasStyleProps) : React.CSSProperties | void => {

      const {
          grid,
          flex,
          evenly,
          around,
          between,
          start, 
          end,
          center,
          column, 
          columns,
          rows,
      } = css

      const defaultFlex = {
          display: 'flex',
          flexWrap:'wrap',
          flexDirection:column ? 'column':'row'
      } as React.CSSProperties
      if(grid){
          if(columns){
              return {
                  display: 'grid',
                  gridTemplateColumns:columns,
             }
          }
          if(rows){
              return {
                  display: 'grid',
                  gridTemplateRows:columns,
             }
          }
         return {
              display: 'grid',
         }
      }
      if(flex){            
          if(around){
              return {
                  ...defaultFlex,
                  justifyContent:'space-around'
              }
          }
          if(between){
              return {
                  ...defaultFlex,
                  justifyContent:'space-between'
              }
          }
          if(evenly){
              return {
                  ...defaultFlex,
                  justifyContent:'space-evenly'
              }
          }
          if(center){
              return {
                  ...defaultFlex,
                  justifyContent:'center'
              }
          }
          if(start){
              return {
                  ...defaultFlex,
                  justifyContent:'flex-start'
              }
          }
          if(end){
              return {
                  ...defaultFlex,
                  justifyContent:'flex-end'
              }
          } 
      }
  }
  const createCSS = (css : PasStyleProps) => {

      const {
          h,
          w,
          bg,
          shadow,
          b_bottom, 
          b_color, 
          b_left, 
          b_top, 
          b_radius,
          b_right,
          pd,
          pd_bottom,  
          pd_left, 
          pd_top, 
          pd_right,
          mg,
          mg_bottom,  
          mg_left, 
          mg_top, 
          mg_right,
      } = css

      return {
          ...layout(css),
          width: w,
          height: h,
          padding: pd,
          paddingLeft: pd_left,
          paddingBottom: pd_bottom,
          paddingTop:pd_top,
          paddingRight:pd_right,
          margin: mg,
          marginLeft: mg_left,
          marginRight: mg_right,
          marginTop:mg_top,
          marginBottom:mg_bottom,
          borderBottom:b_bottom,
          borderTop:b_top,
          borderRight:b_right,
          borderLeft:b_left,
          borderColor:b_color,
          boxShadow: shadow,
          borderRadius:b_radius,
          background: bg,
      }
  }
  const defaultCSS = createCSS({...props})

  const hoverCSS = createCSS({...props, ..._hover})

  const focusCSS = createCSS({...props, ..._focus})

  const Style = () => {
      if(focus){
          return focusCSS
      }
      if(hover){
          return hoverCSS
      }

      return defaultCSS
  }

  React.useEffect(() => {
      const element = document.querySelector(`[data-passtyle=${tag}]`) as HTMLElement
      element.addEventListener('mouseenter', () => setHover(true))
      element.addEventListener('mouseleave', () => setHover(false))
      element.addEventListener('mousedown', () => setFocus(true))
      element.addEventListener('mouseup', () => setFocus(false))

      return () => {
          element.removeEventListener('mouseenter', () => setHover(true))
          element.removeEventListener('mouseenter', () => setHover(false))
          element.removeEventListener('mousedown', () => setFocus(true))
          element.removeEventListener('mouseup', () => setFocus(false))
      }
  }, [])

  return {
      Style:Style()
  }

}

export default useEvents