import { Fragment, useEffect, useRef, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { getEllipsisTxt } from "../../helpers/formatters";
import { useMoralis } from "react-moralis";
import { getExplorer } from "../../helpers/networks";
import { useChain } from "react-moralis";
import { SelectOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ChevronDownIcon } from '@heroicons/react/solid'


const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "0 10px",
  },
  button: {
    border: "2px solid rgb(231, 234, 243)",
    borderRadius: "12px",
  },
};

const menuItems = [
  {
    key: "0x1",
    value: "Ethereum",
    icon: <ETHLogo />,
  },
  {
    key: "0x539",
    value: "Local Chain",
    icon: <ETHLogo />,
  },
  {
    key: "0x3",
    value: "Ropsten Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x4",
    value: "Rinkeby Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x2a",
    value: "Kovan Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x5",
    value: "Goerli Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x38",
    value: "Binance",
    icon: <BSCLogo />,
  },
  {
    key: "0x61",
    value: "Smart Chain Testnet",
    icon: <BSCLogo />,
  },
  {
    key: "0x89",
    value: "Polygon",
    icon: <PolygonLogo />,
  },
  {
    key: "0x13881",
    value: "Mumbai",
    icon: <PolygonLogo />,
  },
  {
    key: "0xa86a",
    value: "Avalanche",
    icon: <AvaxLogo />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const { authenticate, isAuthenticated, isAuthentificating, logout, account } = useMoralis();
  const [selected, setSelected] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isShowing, setIsShowing] = useState(true)


  console.log("chain", chain)

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
    console.log("current chainId: ", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("switch to: ", e.key);
    switchNetwork(e.key);
  };

  //devrais pas avoir de menu car menu deja actif plus bas
  const menu = (
    <Menu onClick={setIsModalVisible}>
      {menuItems.map((item) => (
        <p key={item.key} icon={item.icon}>
          <span style={{ marginLeft: "5px" }}>{item.value}</span>
        </p>
      ))}
    </Menu>
  );



  return (
    <>
        <div>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button key={selected?.key} icon={selected?.icon} onClick={() => setIsModalVisible()} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open Networks selector</span>
                    <p style={{ marginLeft: "5px" }}>{selected?.value} </p>
                      <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true" />
              </Menu.Button>
            </div>
        <Transition
        
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
            <Button key={selected?.key} icon={selected?.icon} style={{ ...styles.button, ...styles.item }}>
              <span style={{ marginLeft: "5px" }}>{selected?.value}</span>
            </Button>
            </Menu.Item>
          </Menu.Items>
        </Transition> 
      </Menu> 
  </div>

</>
  );
}

