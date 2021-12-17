import { Stack, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { useMoralis } from "react-moralis";
import { Ethereum } from "@icons-pack/react-simple-icons";


export default function Auth() {   
    const { authenticate, isAuthenticated, authError } = useMoralis();

    if (!isAuthenticated) {
        return (
            <Stack 
                spacing={6}
                className="flex flex-col items-center space-y-20 pt-48"
            >
                <Ethereum 
                    fill="black" 
                    width={150} 
                    height={150}
                />
                {authError && (
                    <Alert status='error'>
                        <AlertIcon />
                        <Box flex='1'>
                            <AlertTitle>Authentification has failed</AlertTitle>
                            <AlertDescription display='block'>
                                {authError.message}
                            </AlertDescription>
                        </Box>
                        <CloseButton position='absolute' right='8px' top='8px' />
                    </Alert> 
                )}
                <button 
                    onClick={() => authenticate()}
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        Web3 - Login        
                    </span>
                </button>
            </Stack>
        );
    };
};

