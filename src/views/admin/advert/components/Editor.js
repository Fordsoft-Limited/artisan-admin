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
  const handleEditorChange = (description) => {
    onContentChange("description", description);
  };

  return (
    <Card mb="12px">
      <FormControl className="add-new-post">
        <FormLabel>Advertisement title</FormLabel>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Name"
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
              value={formData.email}
              onChange={(e) => onContentChange("email", e.target.value)}
            />
            {errors.email && (
              <div style={{ color: "#ff0000" }}>{errors.email}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Phone No:"
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
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => onContentChange("businessName", e.target.value)}
            />
            {errors.businessName && (
              <div style={{ color: "#ff0000" }}>{errors.businessName}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="websiteLink"
              value={formData.websiteLink}
              onChange={(e) => onContentChange("websiteLink", e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Category"
              value={formData.category}
              onChange={(e) => onContentChange("category", e.target.value)}
            />
            {errors.category && (
              <div style={{ color: "#ff0000" }}>{errors.category}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Street"
              value={formData.street}
              onChange={(e) => onContentChange("street", e.target.value)}
            />
            {errors.city && (
              <div style={{ color: "#ff0000" }}>{errors.city}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="City"
              value={formData.city}
              onChange={(e) => onContentChange("city", e.target.value)}
            />
            {errors.city && (
              <div style={{ color: "#ff0000" }}>{errors.city}</div>
            )}
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              type="text"
              required
              placeholder="Postal code"
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
              value={formData.description}
              placeholder="enter your content title*"
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
