import { ILocality } from "@/lib/domain/core/entities/localityEntity";
import { Specialist, Specialty } from "../../../core/entities/specialists/specialist";

export function specialistSupabaseToMap(data: any): Specialist {
    return {
        id: data["id"] ?? "",
        name: data["nombres"] ?? "",
        direction: data["direccion"] ?? "",
        phone: data["telefono"] ?? "",
        image: data["avatar"] ?? "",
        birthDate: data["fechaNacimiento"] ?? "",
        aboutMe: data["acerca"] ?? "",
        country: data["paisNacimiento"] ?? "",
        curp: data["curp"] ?? "",
        specialties: data["EspecialidadesDoctores"] ?? [],
        localities: data["Localidades"] ?? [],
        status: data["estado"] ?? 0,
        rating: 0,
    } as Specialist;
}

export function specialtySupabaseToMap(data: any): Specialty {
    return {
        id: data["id"] ?? 0,
        name: data["nombre"] ?? "",
        certificate: data["cedula_especialidad"] ?? "",
        institution: data["institucion"] ?? "",
        principal: data["especialidad_principal"] ?? false,
    } as Specialty;
}

export function localitySupabaseToMap(data: any): ILocality {
    return {
        id: data["id"] ?? 0,
        name: data["nombre"] ?? "",
        code: data["consultorio"] ?? "",
        type: data["tipo"] ?? "",
        clues: data["clues"] ?? "",
        address: data["direccion"] ?? "",
        postal_code: data["codigoPostal"] ?? 0,
        state: data["estado"] ?? {},
        city: data["ciudad"] ?? "",
        image_url: data["fotoUrl"] ?? "",
        latitude: data["latitud"] ?? 0,
        longitude: data["longitud"] ?? 0,
    } as ILocality;
}
