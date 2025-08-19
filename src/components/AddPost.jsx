import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Fab from '@mui/material/Fab';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: 20
})

const AddPost = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Tooltip title="Add Post" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30, } }} onClick={() => setOpen(true)}>
                <Fab color='primary' aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"white"} p={3} borderRadius={5}>
                    <Typography color='gray' variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1} mt={2}>

                    </Stack>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost