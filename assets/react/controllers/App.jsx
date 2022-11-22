import React from 'react';
import { useState } from 'react'
import {
  Box,
  Button,
  Heading
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { MyForm } from './components/MyForm'
import '/home/savel/mesProjets/my_react_symphony_project/assets/styles/app.css'



function App() {
  const [tabsOrientation, setTabsOrientation] = useState('horizontal')

  return (
    <ChakraProvider>
      <Box className="App">
        <Heading py='1' align='center' as='h1' size='lg'>My form project</Heading>
        <Box display='flex' justifyContent='space-around' pb='3'>
          <Button w='50%' onClick={() => setTabsOrientation('horizontal')} colorScheme='blue' variant={tabsOrientation === 'horizontal' ? 'solid' : 'outline'}>Horizontal tabs</Button>
          <Button w='50%' onClick={() => setTabsOrientation('vertical')} colorScheme='blue' variant={tabsOrientation === 'vertical' ? 'solid' : 'outline'}>Vertical tabs</Button>
        </Box>
        <MyForm tabsOrientation={tabsOrientation} />
      </Box >
    </ChakraProvider>
  )
}

export default App