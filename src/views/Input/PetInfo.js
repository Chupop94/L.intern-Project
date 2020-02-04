import React, { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  Avatar,
  makeStyles,
  Grid,
  Typography,
  InputLabel,
  Select
} from "@material-ui/core";
import { MdPhoto } from "react-icons/md";
import DatePicker from "react-date-picker";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

// css
import "../../assets/sass/Input/petinfo.scss";

const useStyles = makeStyles(theme => ({
  large: {
    position: "relative",
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginLeft: -theme.spacing(12.5),
    border: "5px solid #E8E8E8",
    zIndex: 0
  }
}));

const PetInfo = () => {
  const [pictures, setPictures] = useState("/main/shiba.jpg");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [adopt_date, setAdoptDate] = useState(new Date());
  const [characteristic, setCharacteristic] = useState("");

  /*
   * 이미지 미리보기, 저장
   */

  var inputElement = "";
  const maxFileSize = 5242880;
  const imgExtension = [".jpg", ".jpeg", ".gif", ".png"];

  const readFile = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Read the image via FileReader API and save image result in state.
      reader.onload = function(e) {
        // Add the file name to the data URL
        let dataURL = e.target.result;
        dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
        resolve({ file, dataURL });
      };

      reader.readAsDataURL(file);
    });
  };

  const onDropFile = useCallback(e => {
    const f = e.target.files[0];
    console.log(f);

    // 사진파일 형식 확인
    if (!hasExtension(f.name)) {
      alert(".jpg .jpeg .gif .png만 가능합니다.");
      return;
    }

    // 사진파일 크기 확인
    if (f.size > maxFileSize) {
      alert("5MB 이하의 파일만 가능합니다.");
      return;
    }

    readFile(f).then(pic => {
      setPictures(pic.dataURL);
      console.log(pic);
    });
  }, []);

  const hasExtension = fileName => {
    const pattern = "(" + imgExtension.join("|").replace(/\./g, "\\.") + ")$";
    return new RegExp(pattern, "i").test(fileName);
  };

  const triggerFileUpload = () => {
    inputElement.click();
  };

  const onUploadClick = e => {
    // Fixes https://github.com/JakeHartnell/react-images-upload/issues/55
    e.target.value = null;
  };

  /*
   * 반려견 정보 입력
   */

  //반려견 이름 변경
  const onChangePetName = e => {
    setName(e.target.value);
  };

  //반려견 특이사항 변경
  const onChangePetChar = e => {
    setCharacteristic(e.target.value);
  };

  //반려견 나이 정보 변경
  const onChangePetAge = e => {
    var regexp = /^[0-9]*$/;
    if (!regexp.test(e.target.value)) {
      alert("숫자만 입력하세요!");
      setAge("");
    } else {
      setAge(e.target.value);
    }
  };

  //입양날짜 변경
  const onChangePetDate = date => {
    setAdoptDate(date);
  };

  //반려견 몸무게 정보 변경
  const onChangePetWeight = e => {
    var regexp = /^[0-9/.]*$/;
    if (!regexp.test(e.target.value)) {
      alert("숫자와 '.'만 입력하세요!");
      setWeight("");
      return;
    }
    if (e.target.value.split(".").length > 2) {
      alert(" '.'(소수 점)은 1개이상 사용할 수 없습니다.");
      setWeight("");
      return;
    }

    setWeight(e.target.value);
  };

  return (
    <Card>
      <div className="bg-yellow-100 pt-4 h-64">
        <div className="profile-photo-div">
          <Avatar
            src={pictures}
            className={useStyles().large}
            onClick={triggerFileUpload}
          />
          <input
            type="file"
            ref={input => (inputElement = input)}
            className="hidden"
            name="pet_img"
            // name={this.props.name}
            // multiple={!this.props.singleImage}
            onChange={onDropFile}
            onClick={onUploadClick}
            // accept={this.props.accept}
          />
          <MdPhoto className="photo-icon" />
        </div>
      </div>
      <div className="float-right mr-1">
        <span className="star">*</span>는 필수입력
      </div>
      <p />
      <CardContent>
      <FormGroup>
          <FormLabel>반려견 종(Species) <span className="star">*</span></FormLabel>
            <Select
              native
              //value={age}
              //onChange={}
              // labelWidth="30"
              // inputProps={{
              //   name: "age",
              //   id: "outlined-age-native-simple"
              // }
              //}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            반려견 이름 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="name"
            value={name}
            onChange={e => onChangePetName(e)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>
            반려견 나이 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="age"
            value={age}
            onChange={e => onChangePetAge(e)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>입양 날짜</FormLabel>
          <br />
          <DatePicker
            value={adopt_date}
            name="adopt_date"
            onChange={e => onChangePetDate(e)}
            className="date-picker"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>
            몸무게 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="weight"
            value={weight}
            onChange={e => onChangePetWeight(e)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>특이사항 (알러지 등)</FormLabel>
          <FormControl
            type="text"
            name="characteristic"
            value={characteristic}
            maxLength="45"
            onChange={e => onChangePetChar(e)}
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default React.memo(PetInfo);
