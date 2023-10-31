# ESMF Logo

## Table of content
  
1. [Foundational principles](#foundational-principles)
    1. [Icon parts](#icon-parts)
    2. [Color](#color)
    3. [Typography](#typography)
2. [Icon variants](#variants)
3. [Logo with typography](#logo-with-typography)
   1. [Landscape](#landscape)
   2. [Portrait](#portrait)
4. [Favicon](#favicon)
5. [QR-code](#qr-code)
6. [Downloads](#downloads)

## Foundational Principles

### Icon parts

The ESMF-icon consists of four independent parts. Each one with a different meaning and a different color. These four elements represent the process steps during the usage of the ESMF framework around the orange Eclipse Open-Source core.

![Four different parts](images/esmf_icon_description.png)

### Color

The following colors are used:

| Scope        | Color sample                                                    | Hex value | Description  |
|--------------|-----------------------------------------------------------------|-----------|----------|
| Consumption  | ![Consumption purple](images/esmf_color_consumption_purple.png) | #995FAB   | API Consumption in UI & backend - the consumption of all required APIs in one UI to provide a customer friendly semantics aware software|
| Provisioning | ![Provisioning blue](images/esmf_color_provisioning_blue.png)   | #8298E0   | API Provisioning	- provisioning/implementation phase where (at least) one API is provided per Aspect Model to make semantic information available in a modular way - also suitable for microservice style software solutions|
| Modeling    | ![Modeling bluegray](images/esmf_color_modeling_bluegrey.png) | #8DA5BF   | Modeling - modeling phase where raw data (from the south side) is explained and turned into Aspect Models|
| Eclipse OSS  | ![Eclipse orange](images/esmf_color_eclipse_orange.png)         | #F88D2B   | SAMM	- depicts SAMM like a sun – SAMM as the meta model which is at its heart and formally how to express the meaning of data in Aspect Models|



### Typography

The ESMF logo is a combination of the ESMF icon and the font "Roboto".

![ESMF logo](images/esmf_logo_color_typography.png)

Download the font directly at: [Google fonts - Roboto](https://fonts.google.com/specimen/Roboto).

Roboto emphasizes on the strong connection between ESMF and the Eclipse Foundation 
and to determine the Open-Source core of ESMF. 

Roboto is used in two different typefaces:

| Name                 | Typography sample                                            |
|----------------------|--------------------------------------------------------------|
| Roboto - Regular 400 | ![Roboto Regular](images/esmf_typography_roboto_regular.png) |
| Roboto - Bold 700    | ![Roboto Bold](images/esmf_typography_roboto_bold.png)       |



## Variants

The icon and the logo are prepared for different applications and types of usage.

### Icon

| Name                                                            | Preferred usage                             | SVG                                              | PNG                                          |
|-----------------------------------------------------------------|---------------------------------------------|--------------------------------------------------|----------------------------------------------|
| ESMF Icon - color                                               | To be used on white and black surfaces      | ![Icon color svg](images/01_ESMF-Icon_Color.svg) | ![Icon color](images/01_ESMF-Icon_Color.png) |
| ESMF Icon - white   | To be used on black and dark gray surfaces  | ![Icon white svg](images/04_ESMF-Icon_White.svg) | ![Icon white](images/04_ESMF-Icon_White.png) |
| ESMF Icon - black                                               | To be used on white and light gray surfaces | ![Icon black svg](images/02_ESMF-Icon_Black.svg) | ![Icon black](images/02_ESMF-Icon_Black.png) |
| ESMF Icon - gray                                                | To be used on white and black surfaces      | ![Icon gray svg](images/03_ESMF-Icon_Grey.svg)   | ![Icon gray](images/03_ESMF-Icon_Grey.png)   |

## Logo with typography

The logo can be used in different surroundings and geometries. Therefore, two different versions are layouted to meet different geometrical needs.

### Landscape

| Name                                                            | Preferred usage                             | SVG                                                                            | PNG                                                                        |
|-----------------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| ESMF Icon - color                                               | To be used on white and black surfaces      | ![Logo landscape color svg](images/05_ESMF-Composite_mark_Landscape_Color.svg) | ![Logo landscape color](images/05_ESMF-Composite_mark_Landscape_Color.png) |
| ESMF Icon - white | To be used on black and dark gray surfaces  | ![Logo landscape white svg](images/08_ESMF-Composite_mark_Landscape_White.svg) | ![Logo landscape white](images/08_ESMF-Composite_mark_Landscape_White.png) |
| ESMF Icon - black                                               | To be used on white and light gray surfaces | ![Logo landscape black svg](images/06_ESMF-Composite_mark_Landscape_Black.svg) | ![Logo landscape black](images/06_ESMF-Composite_mark_Landscape_Black.png) |
| ESMF Icon - gray                                                | To be used on white and black surfaces      | ![Logo landscape gray svg](images/07_ESMF-Composite_mark_Landscape_Grey.svg)   | ![Logo landscape gray](images/07_ESMF-Composite_mark_Landscape_Grey.png)   |

### Portrait

| Name                                                                     | Preferred usage                             | SVG                                                                          | PNG                                                                      |
|--------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| ESMF logo portrait - color                                               | To be used on white and black surfaces      | ![Logo portrait color svg](images/09_ESMF-Composite_mark_Portrait_Color.svg) | ![Logo portrait color](images/09_ESMF-Composite_mark_Portrait_Color.png) |
| ESMF logo portrait - white | To be used on black and dark gray surfaces  | ![Logo portrait white svg](images/12_ESMF-Composite_mark_Portrait_White.svg) | ![Logo portrait white](images/12_ESMF-Composite_mark_Portrait_White.png) |
| ESMF logo portrait - black                                               | To be used on white and light gray surfaces | ![Logo portrait black svg](images/10_ESMF-Composite_mark_Portrait_Black.svg) | ![Logo portrait black](images/10_ESMF-Composite_mark_Portrait_Black.png) |
| ESMF logo portrait - gray                                                | To be used on white and black surfaces      | ![Logo portrait gray svg](images/11_ESMF-Composite_mark_Portrait_Grey.svg)   | ![Logo landscape gray](images/11_ESMF-Composite_mark_Portrait_Grey.png)  |

## Favicon
 
![ESMF favicon example light](images/esmf_favicon_example.png)
![ESMF favicon example light](images/esmf_favicon_example_black.png)

For implementing the favicon on any web source please find the necessary files in the [favicon_package_v0.16.zip](favicon_package_v0.16.zip "download") folder (generated with [realfavicongenerator](https://realfavicongenerator.net/)).

The favicon files need to be transferred to the root folder of your web source. 
Simply integrate the following html lines to the header of your page:

                <link rel="apple-touch-icon" sizes="180x180" href="{{{uiRootPath}}}/img/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="{{{uiRootPath}}}/img/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="{{{uiRootPath}}}/img/favicon-16x16.png">
                <link rel="icon" type="image/x-icon" href="{{{uiRootPath}}}/img/favicon.ico">
                <link rel="manifest" href="{{{uiRootPath}}}/img/site.webmanifest">
                <link rel="mask-icon" href="{{{uiRootPath}}}/img/safari-pinned-tab.svg" color="#5bbad5">
                <meta name="msapplication-TileColor" content="#da532c">
                <meta name="theme-color" content="#ffffff">

## QR-code

The following qr-codes lead to the [ESMF Eclipse project page](https://projects.eclipse.org/projects/dt.esmf).

| Name                                                                     | Preferred usage                             | SVG                                                                          | PNG                                                                      |
|--------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| ESMF qr-code with icon color | To be used on white and light surfaces | ![ESMF_QR-code_icon_color.svg](images/ESMF_QR-code_icon_color.svg) | ![ESMF QR-code icon color.png](images/ESMF_QR-code_icon_color.png) |
| ESMF qr-code with icon & name color | To be used on white and light surfaces | ![ESMF_QR-code_icon_name color.svg](images/ESMF_QR-code_icon_name_color.svg) | ![ESMF QR-code icon name color.png](images/ESMF_QR-code_icon_name_color.png) |
| ESMF qr-code with icon black | To be used on light or white surfaces | ![ESMF_QR-code_icon_black.svg](images/ESMF_QR-code_icon_black.svg) | ![ESMF QR-code icon black.png](images/ESMF_QR-code_icon_black.png) |
| ESMF qr-code with icon & name black | To be used on light or white surfaces | ![ESMF_QR-code_icon_name_black.svg](images/ESMF_QR-code_icon_name_black.svg) | ![ESMF QR-code icon name_black.png](images/ESMF_QR-code_icon_name_black.png) |
| ESMF qr-code with icon white | To be used on black and dark surfaces | ![ESMF_QR-code_icon_white.svg](images/ESMF_QR-code_icon_white.svg) | ![ESMF QR-code icon white.png](images/ESMF_QR-code_icon_white.png) |
| ESMF qr-code with icon & name white | To be used on black and dark gray surfaces  | ![ESMF_QR-code_icon_name_white.svg](images/ESMF_QR-code_icon_name_white.svg) | ![ESMF QR-code icon name_white.svg](images/ESMF_QR-code_icon_name_white.png) |

## Downloads

- All logo image files are contained in zipped folder [2023_ESMF_Logo_V1.1.zip](2023_ESMF_Logo_V1.1.zip "download all logos").
- All qr-code image files are contained in zipped folder [ESMF_QR-code_V1.1.zip](ESMF_QR-code_V1.1.zip "download all qr-codes").
