"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, X, Check, AlertTriangle, ArrowLeft, Lightbulb } from "lucide-react"

export function PhotoDiagnostics() {
  const [captureState, setCaptureState] = useState<"ready" | "captured" | "diagnosed">("ready")

  const handleCapture = () => {
    if (captureState === "ready") {
      setCaptureState("captured")
    } else if (captureState === "captured") {
      setCaptureState("diagnosed")
    } else {
      setCaptureState("ready")
    }
  }

  const resetCapture = () => {
    setCaptureState("ready")
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
              <div className="px-4 py-3 flex justify-between items-center">
                <Button variant="ghost" size="icon" onClick={resetCapture} aria-label="Go back">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-bold">Plant Diagnostics</h1>
                <div className="w-9"></div> {/* Spacer for alignment */}
              </div>

              {/* Camera view */}
              <div className="relative flex-1 bg-black flex items-center justify-center">
                {captureState === "ready" && (
                  <div className="text-center text-white">
                    <Camera className="h-12 w-12 mx-auto mb-4 opacity-70" />
                    <p className="text-lg font-medium">Point camera at your plant</p>
                    <p className="text-sm opacity-70">Make sure the plant is clearly visible</p>
                  </div>
                )}

                {captureState === "captured" && (
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Plant+Image"
                    alt="Captured plant"
                    className="h-full w-full object-cover"
                  />
                )}

                {captureState === "diagnosed" && (
                  <div className="relative h-full w-full">
                    <img
                      src="/placeholder.svg?height=400&width=300&text=Plant+Image"
                      alt="Diagnosed plant"
                      className="h-full w-full object-cover"
                    />

                    {/* Diagnosis overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                      <Badge
                        variant="default"
                        className="bg-warning text-black flex items-center gap-1 px-4 py-2 text-lg mb-4"
                      >
                        <AlertTriangle className="h-5 w-5" /> Needs Water
                      </Badge>

                      <div className="bg-background/90 rounded-lg p-4 max-w-xs">
                        <div className="flex items-start gap-3 mb-3">
                          <Lightbulb className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Diagnosis</h3>
                            <p className="text-sm">
                              Your basil plant is showing signs of dehydration. The leaves are starting to wilt.
                            </p>
                          </div>
                        </div>

                        <Button className="w-full">View Treatment Plan</Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Camera controls */}
                <div className="absolute bottom-6 inset-x-0 flex justify-center">
                  <Button
                    onClick={handleCapture}
                    size="icon"
                    className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white ${
                      captureState === "captured" ? "bg-success/20 border-success" : ""
                    }`}
                    aria-label={captureState === "ready" ? "Capture photo" : "Analyze plant"}
                  >
                    {captureState === "ready" && <Camera className="h-8 w-8 text-white" />}
                    {captureState === "captured" && <Check className="h-8 w-8 text-success" />}
                    {captureState === "diagnosed" && <X className="h-8 w-8 text-white" />}
                  </Button>
                </div>

                {/* Accessibility guide */}
                {captureState === "ready" && (
                  <div className="absolute inset-0 border-2 border-dashed border-white/30 m-12 rounded-lg pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white/50 rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Bottom toolbar */}
              <div className="px-4 py-3 bg-background">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Position plant in frame</p>
                  <Badge variant="outline" className="bg-primary/10 border-none">
                    {captureState === "ready" ? "Ready" : captureState === "captured" ? "Review" : "Diagnosed"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
