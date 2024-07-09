import { Upload as AntdUpload } from 'antd';
import styled from 'styled-components';

const Upload = styled(AntdUpload)`
  width: 100%;
  .ant-upload.ant-upload-select {
    width: 100%;
  }
  margin-top: -20px;
`;

export default Upload;
