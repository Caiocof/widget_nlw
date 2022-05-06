import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react';

export function CloseButton() {
    return (
        <Popover.Button className='PopoverButton' title='Close Feedback Form'>
            <X weight='bold' className='w-4 h-4' />
        </Popover.Button>
    );
}