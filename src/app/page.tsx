import React from 'react';
import { StatusCard } from '@/components/dashboard/StatusCard';
import { MineMap } from '@/components/dashboard/MineMap';
import { SensorParameters } from '@/components/dashboard/SensorParameters';
import { DeformationTrendChart } from '@/components/dashboard/DeformationTrendChart';

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      
      <div className="flex-none">
        <StatusCard />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Left Column: Map + Trend */}
        <div className="xl:col-span-8 flex flex-col gap-4 min-h-0">
          <div className="flex-1 min-h-0 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex-none">Live Hardware Topology</h3>
            <div className="flex-1 min-h-0 relative">
               <MineMap />
            </div>
          </div>
          <div className="flex-none">
            <DeformationTrendChart />
          </div>
        </div>
        
        {/* Right Column: Sensors */}
        <div className="xl:col-span-4 flex flex-col gap-4 min-h-0">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-none">
            <SensorParameters />
          </div>
        </div>
      </div>
    </div>
  );
}
