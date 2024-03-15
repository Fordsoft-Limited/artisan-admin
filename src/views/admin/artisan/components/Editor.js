import React from "react";
import { Flex, Input, FormControl, FormLabel } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "assets/css/quill.css";
import UploadArtisan from "./UploadArtisan";
import Card from "components/card/Card";
function Editor({ formData, onContentChange, onFileChange, errors }) {
  const handleEditorChange = (serviceDescription) => {
    onContentChange("serviceDescription", serviceDescription);
  };

  return (
    <Card mb="12px">
      <FormControl className="add-new-post">
        <FormLabel>Artisan</FormLabel>
        <Flex flexDirection="column">
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Name*"
              mb="10px"
              value={formData.name}
              onChange={(e) => onContentChange("name", e.target.value)}
            />
            {errors.name && (
              <div style={{ color: "#ff0000" }}>{errors.name}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Email*"
              mb="10px"
              value={formData.email}
              onChange={(e) => onContentChange("email", e.target.value)}
            />
            {errors.email && (
              <div style={{ color: "#ff0000" }}>{errors.email}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="number"
              required="required"
              placeholder="Phone number*:"
              mb="10px"
              value={formData.phone}
              onChange={(e) => onContentChange("phone", e.target.value)}
            />
            {errors.phone && (
              <div style={{ color: "#ff0000" }}>{errors.phone}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Business name*"
              mb="10px"
              value={formData.businessname}
              onChange={(e) => onContentChange("businessname", e.target.value)}
            />
          </Flex>
          <Flex>
            <Input
              type="text"
              required="required"
              placeholder="WebsiteLink"
              mb="10px"
              value={formData.websiteLink}
              onChange={(e) => onContentChange("websiteLink", e.target.value)}
            />
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Business Type*"
              mb="10px"
              value={formData.businessType}
              onChange={(e) => onContentChange("businessType", e.target.value)}
            />
            {errors.businessType && (
              <div style={{ color: "#ff0000" }}>{errors.businessType}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Street*"
              mb="10px"
              value={formData.street}
              onChange={(e) => onContentChange("street", e.target.value)}
            />
            {errors.street && (
              <div style={{ color: "#ff0000" }}>{errors.street}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="City*"
              mb="10px"
              value={formData.city}
              onChange={(e) => onContentChange("city", e.target.value)}
            />
            {errors.city && (
              <div style={{ color: "#ff0000" }}>{errors.city}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <Input
              type="text"
              required="required"
              placeholder="Postal code"
              mb="10px"
              value={formData.postalCode}
              onChange={(e) => onContentChange("postalCode", e.target.value)}
            />
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <UploadArtisan
              title="Pick a file to upload*"
              onFileChange={onFileChange}
            />
            {errors.file && (
              <div style={{ color: "#ff0000" }}>{errors.file}</div>
            )}
          </Flex>
          <Flex flexDirection="column" mb="12px">
            <ReactQuill
              className="add-new-post__editor mb-1"
              value={formData.serviceDescription}
              placeholder="enter your service description title*"
              onChange={handleEditorChange}
              required="required"
            />
          </Flex>
        </Flex>
      </FormControl>
    </Card>
  );
}

export default Editor;
