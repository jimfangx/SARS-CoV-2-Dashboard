# SARS-CoV-2-Dashboard
The SARS-CoV-2-Dashboard is an aggregation website that combines multiple COVID19 Dashboards into 1 website, creating an "status console"/mission control like website for monitoring the progress of the 2019-2020 SARS CoV 2 pandemic.

This project is no longer maintained. The live version was hosted [here](https://covid19.rocketscience.monster) previously. The project is not mobile friendly due to the large amount of information.

# Breakdown of Website & Implementation
1. Iframes for 2 of the dashboards (bottom left & top right)
2. Top left's dashbaord varies depending on location - If the user's current state has a state specific COVID19 Dashboard, it will display that dashboard. Otherwise it will display the WHO's COVID19 Dashboard.
3. Bottom right contains CDC & WHO Twitter feeds & the user's state public health department website.
4. The About page contains county level public health department information, direct links to dashboards and list of higher education institution closings.

5. Location, State Public Health & Local Public Healh information from FCC's Census Location API [here](https://geo.fcc.gov/api/census/#!/area/get_area) and U.S. Department of Homeland Security's HIFLD Public Health Department Data [here](https://hifld-geoplatform.opendata.arcgis.com/datasets/public-health-departments)

# Build From Source
* Clone the project
* Head to your website hosting provider. 
* Open the file manager in cPanel.
* Upload the `index.html`, `index.js`, `style.css`, `about.html`, and `about.js` files to your website. Make sure the files are uploaded to the folder of your page/subpage. Also make sure that `.htaccess` has been modified to include `index.html`

# License
This projecet is licensed under MIT License - See the LICENSE.md file for more details. The main points of the MIT License are:
* This code can be used commercially
* This code can be modified
* This code can be distributed
* This code can be used for private use
* This code has no Liability
* This code has no Warranty
* When using this code, credit must be given to the author

# Authors
* AirFusion45 - Owner

# Credits
* Special thanks to the FCC's Census Location API [here](https://geo.fcc.gov/api/census/#!/area/get_area)
* U.S. Department of Homeland Security's HIFLD Public Health Department Data [here](https://hifld-geoplatform.opendata.arcgis.com/datasets/public-health-departments)

# Contact Me
If you find any bugs, license issues, missing credits, etc. Feel free to contact me by email or Discord!

* Please contact me here:
    * Email: jfang.cv.ca.us@gmail.com
    * Discord: AirFusion#1706