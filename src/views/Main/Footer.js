import React, { PureComponent } from "react";
import { Fab } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//템플릿 컴포넌트를 활용하여 설정된 색을 변경함
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2"
    }
  }
});

export default class Footer extends PureComponent {
  handleMovePage = num => {
    switch (num) {
      case 1:
        window.location.href = "/Home";
        break;
      case 2:
        window.location.href = "/";
        break;
      case 3:
        window.location.href = "/";
        break;
      case 4:
        window.location.href = "/UserPage";
        break;
      default :
        break;
    }
  };

  render() {
    return (
      <div className="fixed_footer">
        <div className="button_flex">
          <ThemeProvider theme={theme}>
            <Fab className="fab" size="medium" color="primary" onClick={e => this.handleMovePage(1)}>
              홈
            </Fab>
            <Fab className="fab" size="medium" color="primary" onClick={e => this.handleMovePage(2)}>
              검색
            </Fab>
            <Fab className="fab" size="medium" color="primary" onClick={e => this.handleMovePage(3)}>
              분석
            </Fab>
            <Fab className="fab" size="medium" color="primary" onClick={e => this.handleMovePage(4)}>
              마이
            </Fab>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
