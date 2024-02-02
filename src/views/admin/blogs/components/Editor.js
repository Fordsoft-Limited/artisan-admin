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
import Upload from "../../profile/components/Upload"
import Card from "components/card/Card";
function Editor() {
    return (
        <Card mb="12px">
            <FormControl className="add-new-post">


                {/* <FormLabel>Email address</FormLabel> */}
                <Input type='text' placeholder="Your Post Title" mb="10px" />
                <Grid>
                   
                        <UploadBlog
                    // gridArea={{
                    //     base: "3 / 1 / 4 / 2",
                    //     lg: "1 / 3 / 2 / 4",
                    // }}
                    h={{ base: "auto", lg: "200px", }}
                     />
                   
                     
                </Grid>
               
                <ReactQuill className="add-new-post__editor mb-1" />
            </FormControl>
        </Card>
    )
}

export default Editor;