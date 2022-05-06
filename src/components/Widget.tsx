import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'



export function Widget() {

    return (
        <Popover className='divChatTeard'>

            <Popover.Panel>Hello World</Popover.Panel>

            <Popover.Button className='buttonChatTeard group'>
                <ChatTeardropDots className='chatTeard' />

                <span className='spanChatTeard'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}