export default class ImageUpload {
  inputElement = "";
  maxFileSize = 5242880;
  imgExtension = [".jpg", ".jpeg", ".gif", ".png"];
  photo = null;

  readFile = file => {
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

  onDropFile = e => {
    const f = e.target.file;

    // 사진파일 형식 확인
    if (!this.hasExtension(f.name)) {
        alert(".jpg .jpeg .gif .png만 가능합니다.");
        return;
    }
    
    // 사진파일 크기 확인
    if (f.size > this.maxFileSize) {
        alert("5MB 이하의 파일만 가능합니다.");
        return;  
    }

    this.photo = this.readFile(f);
  };

  hasExtension = fileName => {
    const pattern = "(" + this.imgExtension.join("|").replace(/\./g, "\\.") + ")$";
    return new RegExp(pattern, "i").test(fileName);
  };

  triggerFileUpload = e => {
    this.inputElement.click();
  }

  onUploadClick = e => {
    // Fixes https://github.com/JakeHartnell/react-images-upload/issues/55
    e.target.value = null;
  };
}
