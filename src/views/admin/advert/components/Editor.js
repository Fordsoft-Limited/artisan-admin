import React from "react";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "assets/css/quill.css";
import UploadArtisan from "./UploadArtisan";
import Card from "components/card/Card";
function Editor({ formData, onContentChange, onFileChange }) {
  const handleEditorChange = (content) => {
    onContentChange("content", content);
  };

  return (
    <Card mb="12px">
      <FormControl className="add-new-post">
        <FormLabel>Advertisement title</FormLabel>
        <Flex gap="20px" mb="12px">
          <Input
            type="text"
            required="required"
            placeholder="enter your name*"
            mb="10px"
            value={formData.name}
            onChange={(e) => onContentChange("name", e.target.value)}
          />

          <Input
            type="text"
            required="required"
            placeholder="enter your email*"
            mb="10px"
            value={formData.email}
            onChange={(e) => onContentChange("email", e.target.value)}
          />
        </Flex>
        <Flex gap="20px" mb="12px">
          <Input
            type="text"
            required="required"
            placeholder="enter your phone No*:"
            mb="10px"
            value={formData.phone}
            onChange={(e) => onContentChange("phone", e.target.value)}
          />
          <Input
            type="text"
            required="required"
            placeholder="enter your businessname*"
            mb="10px"
            value={formData.businessname}
            onChange={(e) => onContentChange("businessname", e.target.value)}
          />
        </Flex>

        <Input
          type="text"
          required="required"
          placeholder="enter your websiteLink"
          mb="10px"
          value={formData.websiteLink}
          onChange={(e) => onContentChange("websiteLink", e.target.value)}
        />
        <Flex gap="20px" mb="12px">
          <Input
            type="text"
            required="required"
            placeholder="enter your Category*"
            mb="10px"
            value={formData.catgory}
            onChange={(e) => onContentChange("category", e.target.value)}
          />
          <Input
            type="text"
            required="required"
            placeholder="enter your street*"
            mb="10px"
            value={formData.street}
            onChange={(e) => onContentChange("street", e.target.value)}
          />
        </Flex>
        <Flex gap="20px" mb="12px">
          <Input
            type="text"
            required="required"
            placeholder="enter your city*"
            mb="10px"
            value={formData.city}
            onChange={(e) => onContentChange("city", e.target.value)}
          />
          <Input
            type="text"
            required="required"
            placeholder="enter your postal code"
            mb="10px"
            value={formData.postalCode}
            onChange={(e) => onContentChange("postalCode", e.target.value)}
          />
        </Flex>
        <UploadArtisan
          title="Pick a file to upload*"
          onFileChange={onFileChange}
        />
        <ReactQuill
          className="add-new-post__editor mb-1"
          value={formData.content}
          placeholder="enter your content title*"
          onChange={handleEditorChange}
          required="required"
        />
      </FormControl>
    </Card>
  );
}

export default Editor;
