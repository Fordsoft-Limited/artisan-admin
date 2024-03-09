import React from 'react';

import {
    Flex,
    Image,
    Input,
    Button,
    Modal,
    FormControl,
    Textarea,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Box,
    SimpleGrid,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react";
import "assets/css/blog.css"
export default function RecentAdvert(imgUrl) {
    return (
        <Box className="recent-blog-posts">
            {/* <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={imgUrl} class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                                        class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                                    <a href={link} title="More Details"><i class="bi bi-link"></i></a>
                                </div>
                            </div>
                    </div>
                </div>
            </div> */}

            <div className="post-box">
                <div className="post-img">
                <Image src={imgUrl} className="img-fluid" alt="" />
                </div>

                <Box display="flex" justifyContent="space-between" alignItems="center" mt="10px">
                    <Button colorScheme='green' variant='outline' fontSize='16px'>Edit</Button>
                    <Button colorScheme='red' variant='outline' fontSize='16px'>Delete</Button>
                </Box>
            </div>
        </Box>
    );
}