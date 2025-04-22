import { DesignSystem } from "@/components/design-system"
import { OnboardingScreen } from "@/components/onboarding-screen"
import { HomeDashboard } from "@/components/home-dashboard"
import { PhotoDiagnostics } from "@/components/photo-diagnostics"
import { PlantDetailsScreen } from "@/components/plant-details-screen"
import { PlantSelectionScreen } from "@/components/plant-selection-screen"
import { GrowthPlanScreen } from "@/components/growth-plan-screen"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <h1 className="text-3xl font-bold mb-8 text-primary">PlantPal Design System</h1>

      <Tabs defaultValue="design-system" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="design-system">Design System</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
          <TabsTrigger value="plant-details">Plant Details</TabsTrigger>
          <TabsTrigger value="plant-selection">Plant Selection</TabsTrigger>
          <TabsTrigger value="growth-plan">Growth Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="design-system" className="mt-6">
          <DesignSystem />
        </TabsContent>

        <TabsContent value="onboarding" className="mt-6">
          <div className="flex justify-center">
            <OnboardingScreen />
          </div>
        </TabsContent>

        <TabsContent value="dashboard" className="mt-6">
          <div className="flex justify-center">
            <HomeDashboard />
          </div>
        </TabsContent>

        <TabsContent value="diagnostics" className="mt-6">
          <div className="flex justify-center">
            <PhotoDiagnostics />
          </div>
        </TabsContent>

        <TabsContent value="plant-details" className="mt-6">
          <div className="flex justify-center">
            <PlantDetailsScreen />
          </div>
        </TabsContent>

        <TabsContent value="plant-selection" className="mt-6">
          <div className="flex justify-center">
            <PlantSelectionScreen />
          </div>
        </TabsContent>

        <TabsContent value="growth-plan" className="mt-6">
          <div className="flex justify-center">
            <GrowthPlanScreen />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
