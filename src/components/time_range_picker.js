import { DatePicker } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

function TimeRangePicker({onTimeChange, onTimeOk}) {
  return (
    <RangePicker
        showTime={{
            format: 'HH:mm:ss',
        }}
        format="YYYY-MM-DDTHH:mm:ss"
        onChange={onTimeChange}
        onOk={onTimeOk}
        style={{width: '100%'}}
    />
  );
}

export default TimeRangePicker;