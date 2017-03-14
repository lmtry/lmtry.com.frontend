import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import {Button} from 'antd'

export const HomeView = () => (
  <div>
    <h4>This is a duck, because Redux!</h4>
    <img className='duck' src={DuckImage} />
    <Button> Button </Button>
  </div>
)

export default HomeView
