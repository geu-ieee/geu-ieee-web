import React from "react"
import Card from "./ProfileCard"

export default function () {
    return <div>
        <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Great things require great people. In our Executive Body, we have a set of smart and dedicated persons who makes great things possible in an open and collaborative environment.
        </p>

        <div class="grid grid-cols-1 gap-1 md:gap-8 mt-8 xl:mt-16 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 max-w-5xl xl:mx-60">
            <Card name="Shalabh Agrawal" pos="Chair" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/ShalabhAgarwal.jpg" />
            <Card name="Tushar Singh" pos="Vice Chair" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/Tushar%20Singh.jpeg" />
            <Card name="Ujjwal Sharma" pos="Secretary" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/UjjwalSharma.jpg" />
            <Card name="Mukul Maurya"  pos="Treasurer" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/Mukul%20Maurya.jpg"/>
            <Card name="Mridul Rao"  pos="Webmaster" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/Mridul%20Rao.jpeg"/>
            <Card name="Shreya Mahajan"  pos="Content Lead" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/ShreyaMahajan.jpeg"/>
            <Card name="Atharva Dhamankar"  pos="Design Team Lead" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/Mukul%20Maurya.jpg"/>
            <Card name="Arun Mathai"  pos="Technical Lead" pic="https://ieee-geu.github.io/assets/img/Executive%20Committee/ArunMathai.jpg"/>
        </div>
    </div>
    </div>
}

