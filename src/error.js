import React from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

export default function Error() {
    return (
        <>
            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />
                    There was an error processing your request
                </Alert>

                <Alert status='success'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='warning'>
                    <AlertIcon />
                    Seems your account is about expire, upgrade now
                </Alert>

                <Alert status='info'>
                    <AlertIcon />
                    Chakra is going live on August 30th. Get ready!
                </Alert>
            </Stack>
        </>
    )
}