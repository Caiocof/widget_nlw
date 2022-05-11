import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from '../WidgetForm'

export function Widget() {

    return (
        <Popover className='divChatTeard'>

            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

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