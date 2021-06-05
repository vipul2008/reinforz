import * as CSS from 'csstype';
import React from 'react';
import { BiGridHorizontal, BiGridVertical } from "react-icons/bi";
import { HiSwitchHorizontal, HiSwitchVertical } from "react-icons/hi";
import { useToggle } from '../../hooks';
import IconGroup from '../IconGroup';
import "./style.scss";

interface Props {
  items: [JSX.Element, JSX.Element]
  lsKey?: string
}

export default function View(props: Props) {
  const { toggle: toggleOrder, current_toggle: order } = useToggle<number>(0, [0, 1], props.lsKey + "_ORDER");
  const { toggle: toggleLayout, current_toggle: layout } = useToggle<CSS.FlexDirectionProperty>("column", ["row", "column"], props.lsKey + "_LAYOUT");

  return <div className="View">
    <div className="View-content" style={{ flexDirection: layout + (order === 0 ? '' : '-reverse') as any }}>
      <div className="View-content-item" style={{ width: layout === 'column' ? '100%' : '50%', height: layout === 'column' ? '50%' : '100%' }}>
        {props.items[0]}
      </div>
      <div className="View-content-item" style={{ width: layout === 'column' ? '100%' : '50%', height: layout === 'column' ? '50%' : '100%' }}>
        {props.items[1]}
      </div>
    </div>
    <IconGroup className="View-icons" icons={[
      [`Click to switch to ${layout} layout`, layout === "row" ? <BiGridHorizontal size={15} onClick={() => {
        toggleLayout();
      }} /> : <BiGridVertical size={15} onClick={() => {
        toggleLayout();
      }} />],
      [`Click to switch to alternate order`, layout === "column" ? <HiSwitchVertical size={15} onClick={() => {
        toggleOrder();
      }} /> : <HiSwitchHorizontal size={15} onClick={() => {
        toggleOrder();
      }} />]
    ]} />
  </div>
}