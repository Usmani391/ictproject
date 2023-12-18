'use client'
import { useState } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Resources', href: '/prog'},
  { name: 'Projects', href: '#'},
  { name: 'Contact', href: '#'},
  // { name: 'Projec', href: '#'}
  // { name: 'Contact', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({val}) {
  const [Stat ,setStat]=useState(val);
  return (
    <div className='my-2 md:my-5 fixed z-50 w-full'>

    <Disclosure as="nav" className=" mx-auto hover:scale-105 ease-in bg-primary w-11/12  shadow-md shadow-teal-400 text-center rounded-3xl   md:border-2 border-teal-400">
      {({ open }) => (
        <>
          <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center ">
              <div className="absolute w-full border-b-4 h-14 border-teal-400  top-7 px-2 shadow-teal-100 inset-y-0 left-0 flex items-center justify-end sm:hidden">
                {/* Mobile menu button menu for close and open*/}
                <Disclosure.Button className="relative inline-flex items-start  justify-center rounded-md p-2 text-gray-100  shadow-sm shadow-teal-500 focus:text-teal-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600">
                  <span className="absolute -inset-0.5" />
                  {/* <span className="sr-only">Open main menu</span> */}
                  {open ? (
                    <XMarkIcon className="block h-5 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-5 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-36">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={()=> setStat(item.name)}
                        className={classNames(
                          item.name==Stat ? ' text-teal-400' : 'text-gray-300 hover:shadow-sm hover:shadow-teal-100 hover:text-white',
                          'block text-start rounded-md px-3 py-2 text-base font-medium'
                        )}
                        
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div> 
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={()=> setStat(item.name)}
                  className={classNames(
                    item.name==Stat ? ' text-teal-400' : 'text-gray-300 hover:shadow-sm hover:shadow-teal-100 hover:text-white',
                    'block text-start rounded-md px-3 py-2 text-base font-medium'
                  )}
                  // aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
