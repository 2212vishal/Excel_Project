import React from 'react';
import Sidebar from './Sidebar';
import Table from './Table';
import Singledropbutton from './Singledropbutton';
import MultiSelectMenu from './MultiSelectMenu';
import FinanceToolbar from './FinanceToolbar';

const FirstPage = () => {
    const currency = ['BSUD', 'Crore'];
    const supplier = ['Taiwan', 'AMD', 'Intel Corporation', 'ARM', 'Facebook', 'Microsoft', 'Google', 'Nvidia'];
    const company = ['Taiwan', 'AMD', 'Intel Corporation', 'ARM', 'Facebook', 'Microsoft', 'Google', 'Nvidia'];
    const competitor = ['Taiwan', 'AMD', 'Intel Corporation', 'ARM', 'Facebook', 'Microsoft', 'Google', 'Nvidia'];
    const customer = ['Taiwan', 'AMD', 'Intel Corporation', 'ARM', 'Facebook', 'Microsoft', 'Google', 'Nvidia'];

    return (
        <div className="flex gap-4 bg-customLightDark">

            <div className=" w-1/5 h-auto bg-white">
                <Sidebar />
            </div>
            <div className="flex flex-col  w-4/5  bg-customLightDark">
                <div className="flex gap-3 justify-between m-4 p-4 bg-white">
                    <div className="flex flex-col">
                        <p>Currency</p>
                        <Singledropbutton className="w-300" items={currency} option="currency" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <p >Supplier</p>
                            <MultiSelectMenu items={supplier} option="supplier"/>
                        </div>
                        <div className="flex flex-col">
                            <p >Company</p>
                            <Singledropbutton items={company} option="company"/>
                        </div>
                        <div className="flex flex-col">
                            <p >Competitor</p>
                            <MultiSelectMenu items={competitor} option="competitor"/>
                        </div>
                        <div className="flex flex-col">
                            <p>Customer</p>
                            <MultiSelectMenu items={customer} option="customer"/>
                        </div>
                    </div>
                </div>
                <div className="m-4 p-4 bg-white">
                    <FinanceToolbar/>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
