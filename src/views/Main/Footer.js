import React, { PureComponent } from "react";
import { Fab } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//템플릿 컴포넌트를 활용하여 설정된 색을 변경함
const theme = createMuiTheme({
  palette: {
    primary: {
      light:'#64b5f6',
      main: '#2196f3',
      dark: '#1976d2'
    }
  },
});

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="fixed_footer">
        <div className="button_flex">
        <ThemeProvider theme={theme}>
          <Fab className="fab" size="medium" color='primary'> 홈</Fab>
          <Fab className="fab" size="medium" color='primary'>검색</Fab>
          <Fab className="fab" size="medium" color='primary'>분석</Fab>
          <Fab className="fab" size="medium" color='primary'>마이</Fab>
        </ThemeProvider>
        </div>
      </div>
    );
  }
}
