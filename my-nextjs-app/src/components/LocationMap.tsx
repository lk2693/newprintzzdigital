'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface LocationMapProps {
  lat: number;
  lng: number;
  address: string;
  className?: string;
}

export default function LocationMap({ lat, lng, address, className = '' }: LocationMapProps) {
  const [customIcon, setCustomIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    // Benutzerdefiniertes Marker Icon mit PrintzzDigital Farben
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative; width: 40px; height: 40px;">
          <div style="
            background: linear-gradient(135deg, #EAB308 0%, #F59E0B 100%);
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background: black;
              border-radius: 50%;
              transform: rotate(45deg);
            "></div>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
    
    setCustomIcon(icon);
  }, []);

  if (!customIcon) {
    return (
      <div className={`w-full ${className}`} style={{ height: '100%', minHeight: '300px' }}>
        <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500">Karte wird geladen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} style={{ height: '100%', minHeight: '300px' }}>
      <MapContainer
        center={[lat, lng]}
        zoom={16}
        scrollWheelZoom={false}
        zoomControl={true}
        style={{ height: '100%', width: '100%', minHeight: '300px', borderRadius: '1rem' }}
      >
        {/* Moderne Kartendarstellung mit Carto Positron Style */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div className="text-left p-2">
              <div className="font-bold text-lg text-gray-900 mb-2">PrintzzDigital</div>
              <div className="text-sm text-gray-600 mb-3 leading-relaxed">
                {address}
              </div>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Route planen
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
