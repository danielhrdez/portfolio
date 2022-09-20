import React, { useState } from 'react';
import './ToggleSwitch.scss';

interface ToggleSwitchProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  text1: string;
  text2: string;
}

function ToggleSwitch(props: ToggleSwitchProps): JSX.Element {
  const [checked, setChecked] = useState(props.checked ?? false);
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={() => {
        setChecked(!checked);
        props.onChange(!checked);
      }} />
      <div className={`slider round ${checked ? 'checked' : ''}`}>
        <span className="on">{props.text2}</span>
  	    <span className="off">{props.text1}</span>
      </div>
    </label>
  );
}

export default ToggleSwitch;
