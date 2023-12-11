# ESMF Logo

This page specifies the intended use of the ESMF logo. Find descriptions, guidance, and source files as well as further artifacts based on the ESMF logo, such as QR codes.

## Table of contents
  
- [ESMF Logo](#esmf-logo)
  - [Table of contents](#table-of-contents)
  - [Foundational principles](#foundational-principles)
    - [Icon parts](#icon-parts)
    - [Colors](#colors)
    - [Typography](#typography)
  - [Source files for different use cases](#source-files-for-different-use-cases)
    - [Icon only](#icon-only)
    - [Full logo](#full-logo)
      - [Landscape](#landscape)
      - [Portrait](#portrait)
  - [Favicon](#favicon)
  - [QR code](#qr-code)
  - [Downloads](#downloads)

## Foundational principles

The ESMF logo is a combination of a visual element, the ESMF icon, and text.

### Icon parts

The ESMF icon consists of four independent parts. Each one carries a different meaning and a different color. These four elements represent the process steps during the usage of the ESMF framework around the orange Eclipse open-source core.

![Four different parts](images/esmf_icon_description.png)

### Colors

The following colors are used:

| Scope        | Color sample                                                    | Hex value | What the color stands for |
|--------------|-----------------------------------------------------------------|-----------|----------|
| Consumption  | ![Consumption purple](images/esmf_color_consumption_purple.png) | #995FAB   | API Consumption in UI & backend – for example, the consumption of all required APIs in one UI, providing a user-friendly, semantics-aware software.|
| Provisioning | ![Provisioning blue](images/esmf_color_provisioning_blue.png)   | #8298E0   | The API provisioning (or: implementation) phase where at least one API is provided per Aspect Model to make semantic information available in a modular way. Also suitable for microservice-style software solutions.|
| Modeling    | ![Modeling blue-gray](images/esmf_color_modeling_bluegray.png)  | #8DA5BF   | The modeling phase where raw data is explained by creating Aspect Models.|
| Eclipse OSS  | ![Eclipse orange](images/esmf_color_eclipse_orange.png)         | #F88D2B   | SAMM, the Semantic Aspect Meta Model at the heart of the ESMF tools and the ESMF project at Eclipse. SAMM specifies how to express the meaning of data through Aspect Models in both a human- and machine-readable way.|

### Typography

The ESMF logo is a combination of the ESMF icon and the font "Roboto".

![ESMF logo](images/esmf_logo_color_typography.png)

Download the font directly at: [Google fonts - Roboto](https://fonts.google.com/specimen/Roboto).

Roboto emphasizes on the strong connection between ESMF and the Eclipse Foundation and to determine the open-source core of ESMF.

Roboto is used in two different typefaces:

| Name                 | Typography sample                                            |
|----------------------|--------------------------------------------------------------|
| Roboto – Regular 400 | ![Roboto Regular](images/esmf_typography_roboto_regular.png) |
| Roboto – Bold 700    | ![Roboto Bold](images/esmf_typography_roboto_bold.png)       |

## Source files for different use cases

The icon and the logo are prepared for different applications and types of usage.

### Icon only

| Name                 | Preferred usage                       | SVG                                              | PNG                                          |
|----------------------|---------------------------------------|--------------------------------------------------|----------------------------------------------|
| ESMF icon – color    | For use on white or black backgrounds | ![Icon color svg](images/01_ESMF-Icon_Color.svg) | ![Icon color](images/01_ESMF-Icon_Color.png) |
| ESMF icon – white    | For use on black or dark backgrounds  | ![Icon white svg](images/04_ESMF-Icon_White.svg) | ![Icon white](images/04_ESMF-Icon_White.png) |
| ESMF icon – black    | For use on white or light backgrounds | ![Icon black svg](images/02_ESMF-Icon_Black.svg) | ![Icon black](images/02_ESMF-Icon_Black.png) |
| ESMF icon – gray     | For use on white or black backgrounds | ![Icon gray svg](images/03_ESMF-Icon_Gray.svg)   | ![Icon gray](images/03_ESMF-Icon_Gray.png)   |

### Full logo

The logo can be used in different surroundings and geometries. Therefore, two different versions are designed to meet different geometrical needs.

#### Landscape

| Name                           | Preferred usage                       | SVG                                                                            | PNG                                                                        |
|--------------------------------|---------------------------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| ESMF logo landscape – color    | For use on white or black backgrounds | ![Logo landscape color svg](images/05_ESMF-Composite_mark_Landscape_Color.svg) | ![Logo landscape color](images/05_ESMF-Composite_mark_Landscape_Color.png) |
| ESMF logo landscape – white    | For use on black or dark backgrounds  | ![Logo landscape white svg](images/08_ESMF-Composite_mark_Landscape_White.svg) | ![Logo landscape white](images/08_ESMF-Composite_mark_Landscape_White.png) |
| ESMF logo landscape – black    | For use on white or light backgrounds | ![Logo landscape black svg](images/06_ESMF-Composite_mark_Landscape_Black.svg) | ![Logo landscape black](images/06_ESMF-Composite_mark_Landscape_Black.png) |
| ESMF logo landscape – gray     | For use on white or black backgrounds | ![Logo landscape gray svg](images/07_ESMF-Composite_mark_Landscape_Gray.svg)   | ![Logo landscape gray](images/07_ESMF-Composite_mark_Landscape_Gray.png)   |

#### Portrait

| Name                         | Preferred usage                       | SVG                                                                          | PNG                                                                      |
|------------------------------|---------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| ESMF logo portrait – color   | For use on white or black backgrounds | ![Logo portrait color svg](images/09_ESMF-Composite_mark_Portrait_Color.svg) | ![Logo portrait color](images/09_ESMF-Composite_mark_Portrait_Color.png) |
| ESMF logo portrait – white   | For use on black or dark backgrounds  | ![Logo portrait white svg](images/12_ESMF-Composite_mark_Portrait_White.svg) | ![Logo portrait white](images/12_ESMF-Composite_mark_Portrait_White.png) |
| ESMF logo portrait – black   | For use on white or light backgrounds | ![Logo portrait black svg](images/10_ESMF-Composite_mark_Portrait_Black.svg) | ![Logo portrait black](images/10_ESMF-Composite_mark_Portrait_Black.png) |
| ESMF logo portrait – gray    | For use on white or black backgrounds | ![Logo portrait gray svg](images/11_ESMF-Composite_mark_Portrait_Gray.svg)   | ![Logo landscape gray](images/11_ESMF-Composite_mark_Portrait_Gray.png)  |

## Favicon

![ESMF favicon example light](images/esmf_favicon_example.png)
![ESMF favicon example light](images/esmf_favicon_example_black.png)

For implementing the favicon on any web source please find the necessary files in the [favicon_package_v0.16.zip](favicon_package_v0.16.zip "download") folder (generated with [realfavicongenerator](https://realfavicongenerator.net/)).

The favicon files need to be transferred to the root folder of your web source.
Simply integrate the following HTML lines to the header of your page:

                <link rel="apple-touch-icon" sizes="180x180" href="{{{uiRootPath}}}/img/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="{{{uiRootPath}}}/img/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="{{{uiRootPath}}}/img/favicon-16x16.png">
                <link rel="icon" type="image/x-icon" href="{{{uiRootPath}}}/img/favicon.ico">
                <link rel="manifest" href="{{{uiRootPath}}}/img/site.webmanifest">
                <link rel="mask-icon" href="{{{uiRootPath}}}/img/safari-pinned-tab.svg" color="#5bbad5">
                <meta name="msapplication-TileColor" content="#da532c">
                <meta name="theme-color" content="#ffffff">

## QR code

The following QR codes lead to the [ESMF Eclipse project page](https://projects.eclipse.org/projects/dt.esmf).

| Name                                | Preferred usage                        | SVG                                                                                         | PNG                                                                      |
|-------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| ESMF QR code with icon color        | For use on white or light backgrounds | ![ESMF_QR-code_icon_color.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_color.svg)           | ![ESMF QR-code icon color.png](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_color.png) |
| ESMF QR code with icon & name color | For use on white or light backgrounds | ![ESMF_QR-code_icon_name color.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_name_color.svg) | ![ESMF QR-code icon name color.png](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_name_color.png) |
| ESMF QR code with icon black        | For use on white or light backgrounds  | ![ESMF_QR-code_icon_black.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_black.svg)           | ![ESMF QR-code icon black.png](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_black.png) |
| ESMF QR code with icon white        | For use on black or dark backgrounds  | ![ESMF_QR-code_icon_white.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_white.svg)           | ![ESMF QR-code icon white.png](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_white.png) |
| ESMF QR code with icon & name black | For use on white or light backgrounds  | ![ESMF_QR-code_icon_name_black.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_name_black.svg) | ![ESMF QR-code icon name_black.png](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_name_black.png) |
| ESMF QR code with icon & name white | For use on black or dark backgrounds  | ![ESMF_QR-code_icon_name_white.svg](ESMF_QR-code_V1.1/svg/ESMF_QR-code_icon_name_white.svg) | ![ESMF QR-code icon name_white.svg](ESMF_QR-code_V1.1/png/ESMF_QR-code_icon_name_white.png) |

## Downloads

- All logo image files are also contained in zipped folder [2023_ESMF_Logo_V1.1.zip](2023_ESMF_Logo_V1.1.zip "download all logos").
- All QR code image files are also contained in zipped folder [ESMF_QR-code_V1.1.zip](ESMF_QR-code_V1.1.zip "download all QR codes").
