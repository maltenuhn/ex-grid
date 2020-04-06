/** @jsx jsx */
import React from 'react'
import {jsx, css, Global, ClassNames} from '@emotion/core'
import './App.css'

const Checkbox = (props) => (
  <div
    style={{
      width: 14,
      height: 14,
      border: '1px solid #EDEBED',
      borderRadius: 2,

      backgroundColor: 'white',
    }}
  />
)

const PrometheusControlx2 = (props) => (
  <div
    tabIndex={-1}
    style={{
      cursor: 'pointer',
      height: '23px',
      border: '1px solid #EDEBED',
      borderRadius: 2,
      backgroundColor: 'white',
      padding: '0px 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    css={{
      '&:focus': {
        outline: 'none',
        border: '1px solid #07AAFF',
      },
    }}
  >
    Option 1<span style={{color: '#D8D8D8'}}>|</span>
    <span style={{opacity: 0.4}}>Option 2</span>
  </div>
)

const PrometheusControlx4 = (props) => (
  <div
    tabIndex={-1}
    style={{
      cursor: 'pointer',
      height: '23px',
      border: '1px solid #EDEBED',
      borderRadius: 2,
      backgroundColor: 'white',
      padding: '0px 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    css={{
      '&:focus': {
        outline: 'none',
        border: '1px solid #07AAFF',
      },
    }}
  >
    🍋<span style={{color: '#D8D8D8'}}>|</span>
    <span style={{opacity: 0.4}}>🍒</span>
    <span style={{color: '#D8D8D8'}}>|</span>
    <span style={{opacity: 0.4}}>🍊</span>
    <span style={{color: '#D8D8D8'}}>|</span>
    <span style={{opacity: 0.4}}>🍐</span>
  </div>
)

const Swatch = (props) => (
  <div
    style={{
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px #ECECEC, inset 0 0 0 2px #FFFFFF',
      backgroundImage: 'radial-gradient(50% 118%, #FAFF00 18%, #FF009C 100%)',
      height: 23,
      width: 38,
    }}
  />
)

const Label = (props) => <label style={{fontWeight: 500, overflow: 'scroll',  whiteSpace: 'nowrap'}} {...props} />

const InlineButton = (props) => (
  <button
    css={{
      backgroundColor: 'transparent',
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      outline: 'none',
      '&:hover': {
        backgroundColor: 'pink',
      },
    }}
  >
    {props.children}
  </button>
)

const SquareButton = (props) => (
  <button
    style={{
      backgroundColor: '#f0f0f0',
      border: 'none',
      boxShadow: '0px 0px .5px 0px rgba(0,0,0,.5)',
      width: 23,
      height: 23,
      borderRadius: 2,
    }}
    {...props}
  />
)

const Input = (props) => (
  <input
    type='text'
    value={props.value}
    style={{}}
    css={{
      height: 23,
      width: '100%',
      border: '1px solid #EDEBED',
      borderRadius: 2,
      outline: 'none',
      paddingLeft: 6,
      '&:focus': {
        border: '1px solid #07AAFF',
      },
    }}
  />
)

const HeaderRow = (props) => (
  <div
    css={{
      height: 36,
      paddingLeft: 8,
      paddingRight: 8,
      backgroundColor: '#FCFCFC',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      letterSpacing: 0.2,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F8F8F8',
      },
    }}
  >
    {props.children}
  </div>
)

const GridRow = (props) => (
  <div
    style={{
      // outline: '1px solid lightblue',
      padding: '0px 8px',
      display: 'grid',
      height: 36,
      backgroundColor: '#FCFCFC',
      alignItems: 'center',
      gridColumnGap: 10,
      overflow: 'hidden',
      ...props.style,
    }}
  >
    {props.children}
  </div>
)

const UnpaddedGridRow = (props) => (
  <div
    style={{
      // outline: '1px solid lightblue',
      display: 'grid',
      height: 36,
      backgroundColor: '#FCFCFC',
      alignItems: 'center',
      gridColumnGap: 8,
      overflow: 'hidden',
      ...props.style,
    }}
  >
    {props.children}
  </div>
)

const FlexRow = (props) => (
  <div style={{display: 'flex', alignItems: 'center', height: 36, ...props.style}}>
    {props.children}
  </div>
)

export const HoverDropdown = (props) => (
  <div style={{position: 'relative'}}>
    <div
      css={{
        // this ensures that the label is aligned,
        // but the hover state leaves enough state
        padding: 4,
        transform: 'translateX(-4)',
        '&:hover': {
          boxShadow: '0px 0px 1px 0px #888',
        },
      }}
    >
      {props.children}
    </div>
  </div>
)

export const Inspector = (props) => (
  <div
    className='Inspector'
    style={{
      cursor: 'default',
      fontSize: 11,
      borderRight: '1px solid #f0f0f0',
      height: '100vh',
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      ...props.style,
    }}
  >
    <HeaderRow>
      <span style={{flexGrow: 1}}>Inspector</span>
      <SquareButton>+</SquareButton>
    </HeaderRow>
    <GridRow style={{padding: '0px 8px', gridTemplateColumns: '1fr 172px', alignItems: 'center'}}>
      <Label>Overflow</Label>
      <Input>Hidden</Input>
    </GridRow>
    <GridRow
      style={{
        gridTemplateColumns: '1fr 172px',
      }}
    >
      <Label>Overflow with a really long text</Label>
      <Input>Hidden</Input>
    </GridRow>
    <GridRow style={{gridTemplateColumns: '1fr 172px'}}>
      <Label>Option?</Label>
      <PrometheusControlx2 />
    </GridRow>

    <GridRow style={{gridTemplateColumns: '1fr 172px'}}>
      <UnpaddedGridRow style={{gridColumnGap: 8, gridTemplateColumns: 'auto 1fr'}}>
        <Checkbox />
        <Swatch />
      </UnpaddedGridRow>
      {/* TODO fix this so the gap is correct, but the right input doesn't get cropped  */}
      <UnpaddedGridRow style={{gridColumnGap: 8, gridTemplateColumns: 'auto 53px'}}>
        <Input value='#212333' default='hex' />
        <Input value='30%' />
      </UnpaddedGridRow>
    </GridRow>
    <GridRow style={{gridTemplateColumns: '1fr 172px'}}>
      <HoverDropdown>No Wrap</HoverDropdown>
      <PrometheusControlx4 />
    </GridRow>

    <HeaderRow>
      <span style={{flexGrow: 1}}>LAYOUT</span>
      <SquareButton>+</SquareButton>
    </HeaderRow>
    <GridRow style={{gridTemplateColumns: '1fr '}}>
      <PrometheusControlx4 />
    </GridRow>
    <GridRow style={{gridTemplateColumns: '1fr 172px '}}>
      <FlexRow style={{justifyContent: 'space-between', marginRight: 8}}>
        <FlexRow
          style={{
            border: '1px solid #EDEBED',
            backgroundColor: 'white',
            height: 23,
            width: 23,
            justifyContent: 'center',
          }}
        >
          |
        </FlexRow>
        <FlexRow
          style={{
            border: '1px solid #EDEBED',
            backgroundColor: 'white',
            height: 23,
            width: 23,
            justifyContent: 'center',
          }}
        >
          —
        </FlexRow>
      </FlexRow>
      {/* 172 (hardcoded above) - (4elements - 1) * 2px gapwidth = 166. 166 - 2*16 =134. 134 / 2 =  */}
      <UnpaddedGridRow style={{gridTemplateColumns: 'repeat(2, 67px 16px)', gridColumnGap: 2}}>
        <Input />
        <InlineButton />
        <Input />
        <InlineButton />
      </UnpaddedGridRow>
    </GridRow>

    {/* TODO this doesn't work yet, and feels too hardcoded. A row + column grid maybe? */}
    <GridRow style={{gridTemplateColumns: '1fr 172px ', height: 72}}>
      <FlexRow style={{justifyContent: 'space-between'}}>
        <div style={{height: 59, width: 53, backgroundColor: 'white'}}>
          <CopyPasteControl />
        </div>
      </FlexRow>
      <FlexRow style={{flexDirection: 'column', height: undefined}}>
        <UnpaddedGridRow
          style={{height: 28, gridTemplateColumns: 'repeat(2, 67px 16px)', gridColumnGap: 2}}
        >
          <Input />
          <InlineButton />
          <Input />
          <InlineButton />
        </UnpaddedGridRow>
        <UnpaddedGridRow
          style={{height: 28, gridTemplateColumns: 'repeat(2, 67px 16px)', gridColumnGap: 2}}
        >
          <Input />
          <InlineButton>⌘</InlineButton>
          <Input />
          <InlineButton />
        </UnpaddedGridRow>
      </FlexRow>
    </GridRow>
  </div>
)

export default function App() {
  return (
    <div
      className='Inspector'
      style={{
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Inspector style={{width: 261}} />
      <Inspector style={{width: 320}} />
      <Inspector style={{width: 150}} />
    </div>
  )
}

const CopyPasteControl = (props) => (
  <svg width='59px' height='53px' viewBox='0 0 59 53' version='1.1'>
    <title>Edge Pins</title>
    <g id='Inspector' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Inspector-Design---Chosen' transform='translate(-8.000000, -378.000000)'>
        <g id='Edge-Pins' transform='translate(8.000000, 378.000000)'>
          <rect
            id='Rectangle'
            stroke='#ECECEC'
            fill='#FFFFFF'
            x='0.5'
            y='0.5'
            width='58'
            height='52'
            rx='2'
          ></rect>
          <line
            x1='29.5'
            y1='40'
            x2='29.5'
            y2='48'
            id='Line-4-Copy'
            stroke='#DFDFDF'
            fill='#D8D8D8'
            stroke-linecap='square'
          ></line>
          <line
            x1='29.5'
            y1='6'
            x2='29.5'
            y2='14'
            id='Line-4-Copy-3'
            stroke='#333333'
            stroke-linecap='square'
          ></line>
          <line
            x1='48.5'
            y1='23'
            x2='48.5'
            y2='31'
            id='Line-4-Copy-4'
            stroke='#DFDFDF'
            fill='#D8D8D8'
            stroke-linecap='square'
            transform='translate(48.500000, 27.000000) rotate(-90.000000) translate(-48.500000, -27.000000) '
          ></line>
          <line
            x1='10.5'
            y1='23'
            x2='10.5'
            y2='31'
            id='Line-4-Copy-5'
            stroke='#333333'
            stroke-linecap='square'
            transform='translate(10.500000, 27.000000) rotate(-90.000000) translate(-10.500000, -27.000000) '
          ></line>
          <rect
            id='Rectangle'
            stroke='#E8E8E8'
            x='19.5'
            y='17.5'
            width='19'
            height='18'
            rx='2'
          ></rect>
          <line
            x1='29.5'
            y1='21'
            x2='29.5'
            y2='32'
            id='Line-4-Copy-7'
            stroke='#EFEFEF'
            stroke-linecap='square'
          ></line>
          <line
            x1='29.5'
            y1='21'
            x2='29.5'
            y2='33'
            id='Line-4-Copy-6'
            stroke='#EFEFEF'
            stroke-linecap='square'
            transform='translate(29.500000, 27.000000) rotate(-90.000000) translate(-29.500000, -27.000000) '
          ></line>
        </g>
      </g>
    </g>
  </svg>
)
