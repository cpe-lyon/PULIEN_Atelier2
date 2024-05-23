import MyInventoryTable from "@/components/Table";

const InventoryPage = () => {
    return (
      <div className="min-h-screen w-screen bg-slate-700 grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-green-500 h-full px-2">
          {/* Content */}
          <MyInventoryTable />
        </div>
        <div className="col-span-1 bg-blue-500 h-full px-2">
          {/* Content */}
        </div>
      </div>
    );
  };
  
  export default InventoryPage;
  