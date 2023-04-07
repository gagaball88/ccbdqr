import Tracery from "@ryanforever/tracery"

export default function tracery (traceryConfig) {
    
    const tracery = new Tracery(traceryConfig)

    return tracery("origin")
}