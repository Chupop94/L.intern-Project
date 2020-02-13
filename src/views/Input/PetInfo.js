import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  makeStyles
} from "@material-ui/core";
import Select from "react-select";
import { MdPhoto } from "react-icons/md";
import DatePicker from "react-date-picker";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { format } from 'date-fns';
import imageCompression from 'browser-image-compression';

// css
import "../../assets/sass/Input/petinfo.scss";

// data

import { options } from "../../data/PetSpecices";
import HttpConnect from "../../http/HttpConnect";

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
  const [pictures, setPictures] = useState('');
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [adopt_date, setAdoptDate] = useState(new Date());
  const [characteristic, setCharacteristic] = useState("");
  const [species_no, setSpeciesNo] = useState({value:'', label:''});
  const memberNo = JSON.parse(window.sessionStorage.getItem('member')).memberNo;

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
      reader.onload = e => {
        // Add the file name to the data URL
        let dataURL = e.target.result;
        dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
        resolve({ file, dataURL});
      };

      reader.readAsDataURL(file);
    });
  };

  const onDropFile = e => {
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

    console.log(`originalFile size ${f.size / 1024 / 1024} MB`);

    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 256,
      useWebWorker: true
    }

    imageCompression(f, options)
      .then(function (compressedFile) {
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
   
        readFile(compressedFile).then(pic => {
          setPictures(pic.dataURL);
          console.log(pic);
        });
      })
      .catch(function (error) {
        console.log(error.message);
    });
  };

  

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

  //필수입력 값이 채워져있는지 확인. (없으면 0, 모두 있으면 1)
  const onCheckForm = () => {
    if(pictures === '' || name === '' || age === '' || weight === '' || species_no.selectedOption.value === undefined) {
      return 0;
    }
    return 1;
  };

  // 데이터 전송
  const submitPetData = (e) => {
    const checkform = onCheckForm();

    if(checkform === 0) {
      alert("필수 입력칸을 채워주세요!");
      return;
    }

    const http = new HttpConnect();
    http.url = "/pet/insert";
    http.data = JSON.stringify({
      memberNo : memberNo,
      name : name,
      age : age,
      speciesNo : species_no.selectedOption.value,
      adoptDate : format(adopt_date, "yyyy-MM-dd HH:mm:ss"),
      weight : weight,
      characteristic : characteristic,
      petImg : pictures
    });

    console.log(http.data);

    http.getCallData().then(data => {
      console.log(data);

      if (data === 1 ){
        alert("정보입력에 성공했습니다. !");
        // 펫 정보를 sessionStorage(로컬)에 저장
        getPetData();
        window.location.href='/Home';
      } else {
        alert("정보입력에 실패했습니다. !");
      }
    });
  }

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

  const onChangePetSpecies = selectedOption => {
    setSpeciesNo({selectedOption});
    console.log(`Option selected:`, selectedOption);
  };

  const getPetData = () => {
    const http = new HttpConnect();
    http.url = "/pet/data";
    http.data = memberNo;

    http.getCallData().then(data => {
      console.log(data);

      //펫 정보가 없는 경우 = 서버에러
      if (data === "") {
        alert("서버에 에러가 발생하였습니다. 잠시 후 다시 시도해 주세요.");
        window.sessionStorage.clear();
        window.location.href="/";
      } else {
        // 펫 정보를 sessionStorage(로컬)에 저장
        window.sessionStorage.setItem(`pet`, JSON.stringify(data));
        // 홈 화면으로 이동
        window.location.href = "/Home";
      }
    });
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
          <FormLabel>반려견 종(Species) <span className="star">*</span></FormLabel>
            <Select
              className="position-relative z-50"
              value={species_no.value}
              onChange={onChangePetSpecies}
              options={options}
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
        <FormGroup className="text-center pt-10">
          <button className="button button1" onClick={e => submitPetData(e)}>입력완료</button>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default React.memo(PetInfo);
