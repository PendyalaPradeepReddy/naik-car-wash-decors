/**
 * Midnight Pit Lane design reminder: make location choice immediate and useful.
 * Map presentation is a dark graphite control surface with cobalt status indicators.
 */
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { MapView } from "@/components/Map";
import { branches } from "@/lib/site";

export default function BranchMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    return () => {
      loaded.current = false;
    };
  }, []);

  return (
    <div className="branch-map-wrap" aria-label="Map of Naik Car Wash & Decors branches">
      <MapView
        className="branch-map"
        initialCenter={{ lat: 18.013, lng: 79.555 }}
        initialZoom={12}
        onMapReady={(map) => {
          mapRef.current = map;
          if (loaded.current) return;
          loaded.current = true;
          const geocoder = new google.maps.Geocoder();
          const bounds = new google.maps.LatLngBounds();
          branches.forEach((branch) => {
            geocoder.geocode({ address: branch.address }, (results, status) => {
              if (status === "OK" && results?.[0]) {
                const position = results[0].geometry.location;
                new google.maps.Marker({ map, position, title: `Naik Car Wash & Decors — ${branch.name}` });
                bounds.extend(position);
                map.fitBounds(bounds, 70);
              }
            });
          });
        }}
      />
      <div className="branch-map-badge"><MapPin size={16} /> Two Hanamkonda branches</div>
    </div>
  );
}
