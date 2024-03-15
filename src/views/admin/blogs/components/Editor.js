import React from "react";
import {
  Flex,
  Grid,
  Tbody,
  Text,
  Image,
  Input,
  Button,
  Modal,
  Textarea,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "assets/css/quill.css";
import UploadBlog from "./UploadBlog";
import Upload from "../../profile/components/Upload";
import Card from "components/card/Card";
function Editor({ formData, onContentChange, onFileChange }) {
  const handleEditorChange = (content) => {
    onContentChange("content", content);
  };

  return (
    <Card mb="12px">
      <FormControl className="add-new-post">
        <FormLabel>Blog title</FormLabel>
        <Input
          type="text"
          required="required"
          placeholder="enter your blog title"
          mb="10px"
          value={formData.title}
          onChange={(e) => onContentChange("title", e.target.value)}
        />
        <UploadBlog title="Pick a file to upload" onFileChange={onFileChange} />
        <ReactQuill
          className="add-new-post__editor mb-1"
          value={formData.content}
          placeholder="enter your blog content"
          onChange={handleEditorChange}
          required="required"
        />
      </FormControl>
    </Card>
  );
}

export default Editor;
