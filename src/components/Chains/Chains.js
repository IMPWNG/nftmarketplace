import { Fragment, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useChain } from "react-moralis";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Listbox, Transition } from '@headlessui/react'
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";

const networks = [
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
export default function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);

  console.log("chain", chain)

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = networks.find((item) => item.key === chainId);
    setSelectedNetwork(newSelected);
    console.log("current chainId: ", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("switch to: ", e.key);
    switchNetwork(e.key);
  };

  return (
    
    <div className="w-72 fixed top-16">
      <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
        <div className="relativ mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span icon={selectedNetwork?.icon} className="block truncate">{selectedNetwork.value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {networks.map((item) => (
              <Listbox.Option
                key={item.key}
                value={item.value}
                icon={item.icon}
                className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                >
              {({ selectedNetwork, active }) => (
                    <>
                      <span
                        className={`${
                          selectedNetwork ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {item.value}
                      </span>
                      {selectedNetwork ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>    
  );
}


