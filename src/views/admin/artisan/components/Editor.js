import React from "react";
import {
  Grid,
  GridItem,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Name"
              mb="10px"
              value={formData.name}
              onChange={(e) => onContentChange("name", e.target.value)}
            />
            {errors.name && (
              <div style={{ color: "#ff0000" }}>{errors.name}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Email"
              mb="10px"
              value={formData.email}
              onChange={(e) => onContentChange("email", e.target.value)}
            />
            {errors.email && (
              <div style={{ color: "#ff0000" }}>{errors.email}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="number"
              required
              placeholder="Phone number"
              mb="10px"
              value={formData.phone}
              onChange={(e) => onContentChange("phone", e.target.value)}
            />
            {errors.phone && (
              <div style={{ color: "#ff0000" }}>{errors.phone}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Business name*"
              mb="10px"
              value={formData.businessName}
              onChange={(e) => onContentChange("businessName", e.target.value)}
            />
            {errors.businessName && (
              <div style={{ color: "#ff0000" }}>{errors.businessName}</div>
            )}
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              type="text"
              placeholder="WebsiteLink*"
              mb="10px"
              value={formData.websiteLink}
              onChange={(e) => onContentChange("websiteLink", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Business Type*"
              mb="10px"
              value={formData.businessType}
              onChange={(e) => onContentChange("businessType", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Street*"
              mb="10px"
              value={formData.street}
              onChange={(e) => onContentChange("street", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="City*"
              mb="10px"
              value={formData.city}
              onChange={(e) => onContentChange("city", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              placeholder="Postal code"
              mb="10px"
              value={formData.postalCode}
              onChange={(e) => onContentChange("postalCode", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <UploadArtisan
              title="Pick a file to upload"
              onFileChange={onFileChange}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <ReactQuill
              className="add-new-post__editor mb-1"
              value={formData.serviceDescription}
              placeholder="enter your service description title*"
              onChange={handleEditorChange}
              required
            />
          </GridItem>
        </Grid>
      </FormControl>
    </Card>
  );
}

export default Editor;
