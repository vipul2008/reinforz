import { FormGroup, InputLabel, Switch, withStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import clsx from "clsx";
import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { useThemeSettings } from '../../hooks';
import sounds from '../../sounds';

const OnOffSwitch = withStyles({
  switchBase: {
    color: red[500],

    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  'track': {
    backgroundColor: red[500],
  },
  checked: {},
})(Switch);

interface Props<I extends Record<string, any>> {
  items: (keyof I)[]
  itemsMap: I
  setItems: (item: I) => void
  classNames?: {
    FormGroup?: string
    InputLabel?: string
  }
}

export default function Toggles<I extends Record<string, any>>(props: Props<I>) {
  const { theme: THEME } = useThemeSettings();
  const { settings } = useContext(SettingsContext);
  const { itemsMap, setItems } = props;
  const items = props.items as string[];
  return <> {items.map((item) =>
    <FormGroup key={item} row className={clsx("Toggles-item", props?.classNames?.FormGroup && props.classNames.FormGroup)} style={{ backgroundColor: THEME.color.base }}>
      <InputLabel className={clsx("Toggles-item-label", props?.classNames?.InputLabel && props.classNames.InputLabel)}>{item.charAt(0).toUpperCase() + item.substr(1)}</InputLabel>
      <OnOffSwitch
        checked={Boolean(itemsMap[item])}
        onChange={(e) => {
          const checked = itemsMap[item];
          if (checked && settings.sound) {
            sounds.switch_off.play()
          } else if (!checked && settings.sound) {
            sounds.switch_on.play()
          }
          setItems({ ...itemsMap, [item]: !checked })
        }}
      />
    </FormGroup>
  )}
  </>
}