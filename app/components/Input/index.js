import React from 'react';
import styled from 'styled-components';
import { default as InputAnt} from 'antd/lib/input';
import { default as InputNumberAnt} from 'antd/lib/input-number';
import DatePicker from 'antd/lib/date-picker';  // for js

import 'antd/lib/input/style/css';
import 'antd/lib/input-number/style/css';
import 'antd/lib/date-picker/style/css';        // for css
import Img from '../Img';
import QuestionMark from './questionMark.svg';
import Tooltip from '../Tooltip';

const StyledInput = styled.div`
  position: relative;
`;

const StyledDatePicker = styled.div`
  .ant-calendar-picker {
    width: 100%;
  }
  .ant-calendar-picker-clear, .ant-calendar-picker-icon {
    top: 40%;
  }
`;

const StyledImage = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 9px;
  top: 4px;

  img{
    width: 16px;
  }
`;

const Input = (props) => {
  let toRender = [];
  if(props.hasTooltip){
    toRender.push(
      <Tooltip
        key={props.tooltipTitle}
        title={props.tooltipTitle}
        arrowPointAtCenter={true}
        placement="topLeft"
      >
        <StyledImage>
          <Img
            src={QuestionMark}
            alt="Hover for information"
          />
        </StyledImage>
      </Tooltip>
    );
  }

  if(props.type === "number"){
    toRender.push(
      <InputNumberAnt
        key={props.placeholder}
        placeholder={props.placeholder}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        onPressEnter={props.onEnterPressed}
        min={props.min}
      />
    )

  } else if (props.type == "datetime") {
    toRender.push(
      <StyledDatePicker>
        <DatePicker
          showTime
          disabledDate={(value) => value && value.unix() < new Date().getTime() / 1000}
          format="YYYY-MM-DD HH:mm:ss"
          key={props.placeholder}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </StyledDatePicker>
    )
  }  else{
    toRender.push(
      <InputAnt
        key={props.placeholder}
        placeholder={props.placeholder}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        onPressEnter={props.onEnterPressed}
      />
    )
  }

  return (
    <StyledInput>
        {toRender}
    </StyledInput>
  )
}
export default Input;
