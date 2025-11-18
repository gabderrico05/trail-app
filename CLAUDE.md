# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native mobile application built with Expo Router for an interactive trail system ("Trilha Interativa"). The app allows users to browse parks/entities, explore trails, scan QR codes at landmarks, and track their hiking history.

**Tech Stack:**
- Expo SDK 54 with React Native 0.81.4
- Expo Router 6 (file-based routing with typed routes)
- NativeWind 4 (TailwindCSS for React Native)
- TypeScript with strict mode
- React 19.1.0
- Axios for API communication
- React Native Reanimated & Gesture Handler for animations

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start
# or
npx expo start

# Platform-specific runs
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser

# Linting
npm run lint       # Run ESLint (expo lint)
```

## Environment Setup

Create a `.env` file based on `.env.sample`:
- `EXPO_PUBLIC_API_URL` - Backend API base URL
- `EXPO_PUBLIC_IMAGE_BASE_URL` - Image bucket base URL

All environment variables must be prefixed with `EXPO_PUBLIC_` to be accessible in the app.

## Architecture & Code Organization

### Routing Structure

The app uses Expo Router's file-based routing with nested layouts:

```
app/
├── _layout.tsx              # Root stack layout, loads fonts
├── index.tsx                # Landing/splash screen
├── inicio.tsx               # Start screen
├── landmarks.tsx            # Landmarks screen
└── (tabs)/                  # Tab navigator group
    ├── _layout.tsx          # Tab bar configuration
    ├── (home)/              # Home stack group
    │   ├── _layout.tsx
    │   ├── index.tsx        # Park selection
    │   ├── selectTrail.tsx  # Trail selection
    │   ├── detailTrail.tsx  # Trail details
    │   ├── aboutTrail.tsx   # About trail
    │   └── interestPoints.tsx
    ├── qrCode.tsx           # QR Code scanner tab
    └── history.tsx          # History tab
```

**Key Navigation Patterns:**
- Root layout ([app/_layout.tsx](app/_layout.tsx:6)) handles font loading before rendering
- Tab bar ([app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx:26)) dynamically hides on specific screens (detailTrail, aboutTrail)
- SafeAreaView edges are conditionally set: iOS gets `['top', 'bottom']`, Android gets `['top']` or `['bottom']`
- Tab icons use SVG imports from `@/assets/icons/`

### Styling System

**NativeWind/TailwindCSS:**
- Global styles in [app/global.css](app/global.css)
- Tailwind config ([tailwind.config.js](tailwind.config.js)) includes:
  - Custom fonts: `font-regular`, `font-bold`, `font-extrabold`, `font-medium`, `font-semibold`
  - Custom colors: `lightGray`, `burntOrange`, `butterYellow`, `forestGreen`
  - Height-based breakpoints: `h-sm`, `h-md`, `h-lg`, `h-xl`, `h-2xl`, `max-h-*`
  - Safelist for dynamic padding classes (`py-1` through `py-8`, `px-1` through `px-8`)

**Utility Functions:**
- [lib/utils.ts](lib/utils.ts) exports `cn()` for merging Tailwind classes (uses `clsx` + `tailwind-merge`)

### Custom Fonts

The app uses the Gabarito font family loaded in the root layout:
- Gabarito-Regular
- Gabarito-Bold
- Gabarito-ExtraBold
- Gabarito-Medium
- Gabarito-SemiBold

Font files are in `assets/fonts/` and registered in [app.json](app.json:5).

### SVG Handling

SVG files are imported as React components:
- Metro config ([metro.config.js](metro.config.js)) uses `react-native-svg-transformer`
- SVGs go in `assets/icons/` or `assets/`
- Import like: `import Icon from '@/assets/icons/icon.svg'`
- TypeScript definitions in [svg.d.ts](svg.d.ts)

### API Integration

**Architecture:**
The app uses a centralized API service architecture located in `lib/api/`:

```
lib/api/
├── client.ts              # Axios instance with interceptors
├── index.ts               # Unified API exports
└── services/
    ├── entities.ts        # Entity/park API calls
    └── trails.ts          # Trail API calls
```

**API Client ([lib/api/client.ts](lib/api/client.ts)):**
- Pre-configured axios instance with base URL from `EXPO_PUBLIC_API_URL`
- Request/response interceptors for error handling
- Automatic error message extraction and formatting
- `getImageUrl()` helper to build full image URLs from relative paths

**Using the API:**
```typescript
import { api, getImageUrl } from '@/lib/api';

// Fetch all entities
const entities = await api.entities.getAll();

// Fetch trails filtered by entity ID
const trails = await api.trails.getAll({ entityId: 1 });

// Build image URL
const imageUrl = getImageUrl(entity.coverUrl); // Returns full URL or null
```

**Available Services:**
- `api.entities.getAll()` - Get all entities/parks
- `api.entities.getById(id)` - Get single entity by ID
- `api.trails.getAll(params?)` - Get trails (optionally filtered by entityId)
- `api.trails.getById(id)` - Get single trail by ID

**Error Handling:**
All API calls throw errors with this structure:
```typescript
{
  message: string;    // User-friendly error message in Portuguese
  statusCode?: number;
  code?: string;
}
```

Always wrap API calls in try/catch and display errors with `Alert.alert()`.

**Image URLs:**
- Backend returns relative paths in `coverUrl` fields
- Use `getImageUrl()` to construct full URLs: `getImageUrl(entity.coverUrl)`
- Returns `null` if path is null/undefined
- Automatically uses `EXPO_PUBLIC_IMAGE_BASE_URL` environment variable

**Examples:**
- [app/(tabs)/(home)/index.tsx](app/(tabs)/(home)/index.tsx:21) - Fetching entities
- [app/(tabs)/(home)/selectTrail.tsx](app/(tabs)/(home)/selectTrail.tsx:24) - Fetching trails with entity filter

### TypeScript Patterns

**Path Aliases:**
- `@/*` resolves to project root (configured in [tsconfig.json](tsconfig.json:6))
- Always prefer: `import { cn } from '@/lib/utils'` over relative paths

**Type Definitions:**
- Custom types in `types/` directory
- [types/Entity.ts](types/Entity.ts) - `EntityProps` interface for parks/entities
- [types/Trail.ts](types/Trail.ts) - `TrailProps` interface for trails
- [types/ApiResponse.ts](types/ApiResponse.ts) - Generic API response types

### Platform-Specific Code

**Conditional Rendering:**
- Use `Platform.OS === 'ios'` for iOS-specific code
- Use `.web.ts` suffix for web-specific implementations (see [hooks/use-color-scheme.web.ts](hooks/use-color-scheme.web.ts))

**SafeAreaView:**
- iOS: typically uses `edges={['top', 'bottom']}`
- Android: typically uses `edges={['top']}` or `edges={['bottom']}`

## Component Patterns

**Reusable Components:**
- `TextFont` - Custom text component with font family
- `LogoApp` - App logo
- `ReturnButton` - Back navigation button
- `SearchBar` - Search input with filtering
- `ParkCards` / `TrailCard` / `LandmarkCard` - Display cards
- `QRCodeButton` - QR code scanning trigger
- `EntityBanner` - Entity/park banner display

Components use NativeWind classes extensively and often accept a `className` prop for additional styling via the `cn()` utility.

## Important Configuration Notes

- **Expo Router typed routes** enabled in [app.json](app.json:54)
- **React Compiler** experimental feature enabled in [app.json](app.json:55)
- **New Architecture** enabled in [app.json](app.json:17)
- **Edge-to-edge** Android mode enabled in [app.json](app.json:28)
- ESLint uses expo flat config ([eslint.config.js](eslint.config.js))

## Known Patterns & Conventions

1. **Screens should manage their own SafeAreaView** with appropriate edge configuration
2. **Loading states** should show `ActivityIndicator` centered in flex container
3. **Errors** should use `Alert.alert()` with user-friendly messages
4. **Tab bar visibility** is controlled by checking route segments in tabs layout
5. **Colors**: Use Tailwind custom color classes (`text-burntOrange`, `bg-forestGreen-500`, etc.)
6. **Fonts**: Use custom font classes (`font-bold`, `font-semibold`, etc.)
