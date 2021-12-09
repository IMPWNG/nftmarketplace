import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../helpers/formatters";
import { SelectOutlined } from "@ant-design/icons";
import { Button, Card, Modal } from "antd";
import Address from "../components/Address/Address";
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useState } from "react";
import Blockie from "../components/Blockie";
import { getExplorer } from "../helpers/networks";

const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Account() {
  const { authenticate, isAuthenticated, isAuthentificating, logout, account, chainId  } = useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
        <div>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button onClick={() => setIsModalVisible(true)} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                  <Blockie className="h-8 w-8 rounded-full" currentWallet scale={3} /> 
                    <p style={{ marginRight: "1px", ...styles.text }}>{getEllipsisTxt(account, 6)}</p>
              </Menu.Button>
            </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`${getExplorer(chainId)}/address/${account}`} target="_blank" rel="noreferrer"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  <SelectOutlined style={{ marginRight: "5px" }} />View on Explorer</a>                            
              )}
            </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <Button isLoading={isAuthentificating} onClick={logout}
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-500')}
                        >Sing out</Button>
                    )}
                </Menu.Item>
          </Menu.Items>
        </Transition> 
      </Menu> 
    </div>
  </>
);
}  






                  
                                      
