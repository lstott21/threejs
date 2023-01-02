import React from 'react'
import { a } from '@react-spring/web'

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 600 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={40} y={65} children={'LUCAS STOTT'} />
        </text>
        <text fill="#F9A825" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={200} y={65} children={'SITE UNDER CONSTRUCTION'} />
        </text>
        <text fill="#0277BD" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={30} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={100} children={'Software & Mechanical Developer'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={22} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={130} children={'Services'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={160} children={'\u2014   CAD DESIGN (Solidworks, Inventor, AutoCAD)'} />
          <tspan x={40} y={185} children={'\u2014   WEB DESIGN (Javascript, HTML, CSS)'} />
          <tspan x={40} y={210} children={'\u2014   FULL STACK DEVELOPEMENT'} />
          <tspan x={40} y={235} children={'\u2014   RAPID PROTOTYPING'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={22} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270} children={'Interests'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={300} children={'\u2014   3D PRINTING ANYTHING AND EVERYTHING'} />
          <tspan x={40} y={325} children={'\u2014   HOME AGRICULTURE'} />
          <tspan x={40} y={350} children={'\u2014   RENEWABLE ENERGY AND STORAGE'} />
          <tspan x={40} y={375} children={'\u2014   REDESIGNING HOMES TO GADGETS TO FIT NEEDS'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={440} children={'< Working on new website >'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={470} children={'< If you fin yourself here, play around with the                 >'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={500} children={'< Websites should not only be fun, but also interactive >'} />
        </text>
        <text fill="#F9A825" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={20} fontWeight={500} letterSpacing="0em">
          <tspan x={485} y={470} children={'SPHERE'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={700} children="Email:" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em">
          <tspan x={77.5} y={700} children="stott.garrett.com" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={680} children="Phone:" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em">
          <tspan x={82.5} y={680} children="(405)-305-3720" />
        </text>
      </a.svg>
    </div>
  )
}
