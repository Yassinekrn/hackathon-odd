"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Filter, Sun, Droplet, Home, Leaf, X, Check, Sparkles } from "lucide-react"

export function PlantSelectionScreen() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null)
  const [showAiRecommendations, setShowAiRecommendations] = useState(false)

  // Top 3 AI recommended plants
  const aiRecommendedPlants = [
    {
      name: "Basil",
      type: "Herb",
      difficulty: "Easy",
      space: "Small",
      light: "Medium",
      water: "Medium",
      indoor: true,
      match: "98%",
    },
    {
      name: "Mint",
      type: "Herb",
      difficulty: "Easy",
      space: "Small",
      light: "Medium",
      water: "High",
      indoor: true,
      match: "95%",
    },
    {
      name: "Aloe Vera",
      type: "Succulent",
      difficulty: "Easy",
      space: "Small",
      light: "Medium",
      water: "Low",
      indoor: true,
      match: "92%",
    },
  ]

  // All available plants
  const allPlants = [
    ...aiRecommendedPlants,
    {
      name: "Tomato",
      type: "Vegetable",
      difficulty: "Medium",
      space: "Medium",
      light: "High",
      water: "Medium",
      indoor: false,
    },
    {
      name: "Lavender",
      type: "Herb",
      difficulty: "Medium",
      space: "Small",
      light: "High",
      water: "Low",
      indoor: true,
    },
    {
      name: "Strawberry",
      type: "Fruit",
      difficulty: "Medium",
      space: "Medium",
      light: "High",
      water: "Medium",
      indoor: false,
    },
  ]

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const selectPlant = (name: string) => {
    setSelectedPlant(name === selectedPlant ? null : name)
  }

  const getAiRecommendations = () => {
    setShowAiRecommendations(true)
  }

  return (
    <div className="w-full max-w-sm">
      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-0">
          {/* Phone frame */}
          <div className="relative bg-background rounded-lg overflow-hidden border border-border shadow-md">
            {/* Status bar */}
            <div className="h-6 bg-primary/10 w-full"></div>

            {/* Content */}
            <div className="flex flex-col min-h-[600px]">
              {/* Header */}
              <div className="px-4 py-3 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Go back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h1 className="text-xl font-bold">Find Your Plant</h1>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleFilters} aria-label="Toggle filters">
                  <Filter className="h-5 w-5" />
                </Button>
              </div>

              {/* AI Recommendations */}
              <div className="p-4 border-b">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-medium">Best Plants for You</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1"
                    onClick={getAiRecommendations}
                    disabled={showAiRecommendations}
                  >
                    <Sparkles className="h-4 w-4" /> AI Recommend
                  </Button>
                </div>

                {!showAiRecommendations ? (
                  <div className="bg-accent/30 p-3 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      Click the button to get AI-recommended plants based on your location and preferences.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {aiRecommendedPlants.map((plant) => (
                      <Card
                        key={plant.name}
                        className={`cursor-pointer transition-all overflow-hidden ${
                          selectedPlant === plant.name ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => selectPlant(plant.name)}
                      >
                        <CardContent className="p-3 flex items-start gap-3">
                          <div className="bg-accent/50 rounded-lg h-16 w-16 flex-shrink-0 flex items-center justify-center">
                            <img
                              src={`/placeholder.svg?height=60&width=60&text=${plant.name}`}
                              alt={plant.name}
                              className="h-12 w-12"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{plant.name}</h3>
                              <Badge className="bg-success/10 text-success">{plant.match}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1 mb-2">
                              <Badge variant="outline" className="text-xs px-1 py-0 h-5">
                                {plant.type}
                              </Badge>
                              {plant.indoor && (
                                <Badge variant="outline" className="text-xs px-1 py-0 h-5 bg-accent/50">
                                  Indoor
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1" title="Light requirement">
                                <Sun className="h-3 w-3 text-warning" />
                                <span className="text-xs">{plant.light}</span>
                              </div>
                              <div className="flex items-center gap-1" title="Water requirement">
                                <Droplet className="h-3 w-3 text-primary" />
                                <span className="text-xs">{plant.water}</span>
                              </div>
                              <div className="flex items-center gap-1" title="Difficulty">
                                <Leaf className="h-3 w-3 text-primary" />
                                <span className="text-xs">{plant.difficulty}</span>
                              </div>
                            </div>
                          </div>
                          {selectedPlant === plant.name && (
                            <div className="bg-primary text-white rounded-full p-0.5">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="p-4 border-b bg-accent/20 space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">Filters</h2>
                    <Button variant="ghost" size="sm" className="h-8 text-muted-foreground">
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="flex items-center gap-1">
                          <Sun className="h-4 w-4 text-warning" /> Light Requirement
                        </Label>
                        <span className="text-xs text-muted-foreground">Medium</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="flex items-center gap-1">
                          <Droplet className="h-4 w-4 text-primary" /> Water Requirement
                        </Label>
                        <span className="text-xs text-muted-foreground">Low</span>
                      </div>
                      <Slider defaultValue={[25]} max={100} step={1} className="w-full" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="indoor-only" className="flex items-center gap-1 text-sm">
                          <Home className="h-4 w-4" /> Indoor Only
                        </Label>
                        <Switch id="indoor-only" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="edible-only" className="flex items-center gap-1 text-sm">
                          <Leaf className="h-4 w-4" /> Edible Only
                        </Label>
                        <Switch id="edible-only" />
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Plant Type</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Herb", "Vegetable", "Fruit", "Flower", "Succulent"].map((type) => (
                          <Badge
                            key={type}
                            variant="outline"
                            className={`cursor-pointer ${type === "Herb" ? "bg-primary/10 border-primary/30" : ""}`}
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={toggleFilters} className="w-1/3">
                        Cancel
                      </Button>
                      <Button className="w-2/3 ml-2">Apply Filters</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Active filters */}
              <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 flex items-center gap-1">
                  Indoor <X className="h-3 w-3 ml-1 cursor-pointer" />
                </Badge>
                <Badge variant="outline" className="bg-primary/10 border-primary/30 flex items-center gap-1">
                  Easy Care <X className="h-3 w-3 ml-1 cursor-pointer" />
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 text-muted-foreground">
                  Clear All
                </Badge>
              </div>

              {/* Bottom action */}
              {selectedPlant && (
                <div className="p-4 border-t bg-background mt-auto">
                  <Button className="w-full">Select This Plant</Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
