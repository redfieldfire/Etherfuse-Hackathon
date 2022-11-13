use anchor_lang::prelude::*;

#[account]

pub struct Tronco{
    pub id_Tronco: i8,
    pub id_Inicio_Repisa: i8,
    pub id_Fin_Repisa: i8
}

impl Tronco{
    pub const SPACE: usize = DISCRIMINATOR_LENGTH
    +ID_TRONCO_LENGTH
    +ID_INICIO_LENGTH
    +ID_FIN_LENGTH;
}

const DISCRIMINATOR_LENGTH: usize = 8;
const ID_TRONCO_LENGTH: usize = 1;
const ID_INICIO_LENGTH: usize = 1;
const ID_FIN_LENGTH: usize = 1;